import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/api/client'
import { type IGoalSchema, goalsResponseSchema } from '../types'
import { graphql } from '@/api/tada'
import { goalResponseFr } from '../fragments/goalResponseFr'
import { setZeroTime } from '@/helpers/date.helpers'

export const query_activeGoals = async (props: {
    serverSearchInput: string
    limit: number
    offset?: number
}): Promise<IGoalSchema[] | undefined> => {
    try {
        const { limit, serverSearchInput, offset } = props

        const client = await generateClient()

        const query = graphql(
            `
                query query_activeGoals(
                    $limit: Int!
                    $offset: Int!
                    $serverSearchInput: String!
                    $finishedAt: timestamptz!
                ) {
                    goals(
                        limit: $limit
                        offset: $offset
                        order_by: [{ finished_at: asc }, { title: asc }]
                        where: {
                            _and: [
                                { deleted_at: { _is_null: true } }
                                { status: { _eq: "active" } }
                                { _not: { goal_ritual: {} } }
                                { finished_at: { _gte: $finishedAt } }
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
            finishedAt: setZeroTime(new Date()).toISOString(),
        })

        return goalsResponseSchema.parse(res).goals
    } catch (e) {
        return await resolveError(e)
    }
}
