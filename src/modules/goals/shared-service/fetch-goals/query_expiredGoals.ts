import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { type IGoalSchema, goalStatusEnum, goalsResponseSchema } from '../types'
import { setZeroTime } from '@/helpers/date.helpers'

export const query_expiredGoals = async (props: {
    userId: string
    serverSearchInput: string
    limit: number
    offset?: number
}): Promise<IGoalSchema[] | undefined> => {
    const { limit, userId, serverSearchInput, offset } = props
    return await tryCatchRequest<Promise<undefined>, IGoalSchema[] | undefined>(
        async () => {
            const client = await generateTSClient()
            return await client
                .query({
                    __name: 'query_expiredGoals',
                    goals: {
                        __args: {
                            limit,
                            offset,
                            order_by: [{ finished_at: 'asc' }, { title: 'asc' }],
                            where: {
                                _and: [
                                    {
                                        owner_id: { _eq: userId },
                                        deleted_at: { _is_null: true },
                                        status: { _eq: goalStatusEnum.active },
                                        // not ritual
                                        // _not: { goal_ritual: {} },
                                        // not expired
                                        finished_at: { _lt: setZeroTime(new Date()) },
                                    },
                                    {
                                        _or: serverSearchInput.length
                                            ? [
                                                  { title: { _ilike: `%${serverSearchInput}%` } },
                                                  { slogan: { _ilike: `%${serverSearchInput}%` } },
                                                  { description: { _ilike: `%${serverSearchInput}%` } },
                                              ]
                                            : undefined,
                                    },
                                ],
                            },
                        },
                        id: true,
                        created_at: true,
                        deleted_at: true,
                        finished_at: true,
                        is_favorite: true,
                        title: true,
                        slogan: true,
                        description: true,
                        status: true,
                        difficulty: true,
                        goal_ritual: {
                            ritual_id: true,
                            ritual_type: true,
                            ritual_power: true,
                            ritual_interval: true,
                            created_at: true,
                        },
                    },
                })
                .then((response) => {
                    const zParse = goalsResponseSchema.parse(response)
                    return zParse.goals
                })
        },
        async (e) => await resolveError(e),
    )
}
