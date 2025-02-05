import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/api/client'
import { type IGoalSchema, goalsResponseSchema } from '../types'
import { graphql } from '@/api/tada'
import { goalResponseFr } from '../fragments/goalResponseFr'

export const query_allGoals = async (props: {
    serverSearchInput: string
    limit: number
    offset?: number
}): Promise<IGoalSchema[] | undefined> => {
    try {
        const { limit, serverSearchInput, offset } = props

        const client = await generateClient()

        const query = graphql(
            `
                query query_allGoals($limit: Int!, $offset: Int!, $serverSearchInput: String!) {
                    goals(
                        limit: $limit
                        offset: $offset
                        order_by: [{ finished_at: desc }, { title: asc }]
                        where: {
                            deleted_at: { _is_null: true }
                            _or: [
                                { title: { _ilike: $serverSearchInput } }
                                { slogan: { _ilike: $serverSearchInput } }
                                { description: { _ilike: $serverSearchInput } }
                            ]
                        }
                    ) {
                        ...GoalResponseFr
                    }
                }
            `,
            [goalResponseFr],
        )

        const res = await client.request(query, {
            limit,
            offset: offset ?? 0,
            serverSearchInput: `%${serverSearchInput}%`,
        })

        return goalsResponseSchema.parse(res).goals
    } catch (e) {
        return await resolveError(e)
    }
}
