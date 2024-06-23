import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { IGoalSchema, goalStatus, goalsResponseSchema } from '../types'
import { setZeroTime } from '@/helpers/date.helpers'

export const query_fetchActiveGoals = async (props: {
    limit: number
    userId: string
}): Promise<IGoalSchema[] | undefined> => {
    const { limit, userId } = props
    return await tryCatchRequest<Promise<undefined>, IGoalSchema[] | undefined>(
        async () => {
            const client = await generateTSClient()
            return await client
                .query({
                    __name: 'query_fetchActiveGoals',
                    goals: {
                        __args: {
                            order_by: [{ finished_at: 'asc' }],
                            where: {
                                owner_id: { _eq: userId },
                                status: { _eq: goalStatus.active },
                                deleted_at: { _is_null: true },
                                _not: { goal_ritual: {} },
                                finished_at: { _gte: setZeroTime(new Date()) },
                            },
                            limit,
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
