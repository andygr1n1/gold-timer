import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/graphql/client'
import { type IGoalSchema, goalsResponseSchema } from '../types'
import { graphql } from '@/graphql/tada'
import { goalResponseFr } from '../fragments/goalResponseFr'

export const query_completedGoals = async (props: {
    serverSearchInput: string
    limit: number
    offset?: number
}): Promise<IGoalSchema[] | undefined> => {
    try {
        const { limit, serverSearchInput, offset } = props

        const client = await generateClient()

        const query = graphql(
            `
                query query_completedGoals($limit: Int!, $offset: Int!, $serverSearchInput: String!) {
                    goals(
                        limit: $limit
                        offset: $offset
                        order_by: [{ finished_at: asc }, { title: asc }]
                        where: {
                            _and: [
                                { deleted_at: { _is_null: true } }
                                { status: { _eq: "completed" } }
                                {
                                    _or: [
                                        { title: { _ilike: $serverSearchInput } }
                                        { slogan: { _ilike: $serverSearchInput } }
                                        { description: { _ilike: $serverSearchInput } }
                                    ]
                                }
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
