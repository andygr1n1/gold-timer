import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/api/client'
import { type IGoalSchema, goalsResponseSchema } from '../types'
import { setZeroTime } from '@/helpers/date.helpers'
import { graphql } from '@/api/tada'
import { goalResponseFr } from '../fragments/goalResponseFr'

export const query_ritualGoals = async (props: {
    expiredGoals: boolean
    serverSearchInput: string
    limit: number
    offset?: number
}): Promise<IGoalSchema[] | undefined> => {
    try {
        const { limit, offset, serverSearchInput, expiredGoals } = props

        const client = await generateClient()

        const query = graphql(
            `
                query query_ritualGoals(
                    $serverSearchInput: String!
                    $limit: Int!
                    $offset: Int
                    $finished_at: timestamptz_comparison_exp
                ) {
                    goals(
                        limit: $limit
                        offset: $offset
                        order_by: [{ finished_at: asc }, { title: asc }]
                        where: {
                            _and: [
                                { deleted_at: { _is_null: true } }
                                { status: { _eq: "active" } }
                                { goal_ritual: { ritual_power: { _gt: 0 } } }
                                { finished_at: $finished_at }
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
            offset,
            finished_at: expiredGoals ? {} : { _gte: setZeroTime(new Date()).toISOString() },
        })
        console.log(res)
        return goalsResponseSchema.parse(res).goals
    } catch (e) {
        return await resolveError(e)
    }
}
