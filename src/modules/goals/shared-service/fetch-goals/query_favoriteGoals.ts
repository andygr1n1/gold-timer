import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/graphql/client'
import { type IGoalSchema, goalsResponseSchema } from '../types'
import { goalResponseFr } from '../fragments/goalResponseFr'
import { graphql } from '@/graphql/tada'

export const query_favoriteGoals = async (props: {
    serverSearchInput: string
    limit: number
    offset?: number
}): Promise<IGoalSchema[] | undefined> => {
    try {
        const { limit, serverSearchInput, offset } = props

        const client = await generateClient()

        const query = graphql(
            `
                query query_favoriteGoals($limit: Int!, $offset: Int!, $serverSearchInput: String!) {
                    goals(
                        limit: $limit
                        offset: $offset
                        order_by: [{ finished_at: asc }, { title: asc }]
                        where: {
                            _and: [
                                { deleted_at: { _is_null: true } }
                                { is_favorite: { _eq: true } }
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
            serverSearchInput: `%${serverSearchInput}%`,
            limit,
            offset: offset ?? 0,
        })

        return goalsResponseSchema.parse(res).goals
    } catch (e) {
        return await resolveError(e)
    }
}
