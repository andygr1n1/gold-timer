import { fetchData } from '@/functions/fetchData'
import { generateTSClient } from '@/graphql/client'
import { processError } from '@/functions/processMessage'
import { goals } from '@/graphql/generated'
import { optimizeActiveGoalsData } from './optimizeActiveGoalsData'
import { GOAL_STATUS_ENUM } from '@/lib/enums'
import { setZeroTime } from '@/functions/date.helpers'

export type IActiveGoalOptimized = Partial<goals> & {
    isFromFuture: boolean
    isDeadline: boolean
    totalRemainingDays: number
}

export const query_activeGoals = async (id: string, limit = 8): Promise<IActiveGoalOptimized[] | null> => {
    const client = generateTSClient()

    return await fetchData<null, IActiveGoalOptimized[] | null>(
        () =>
            client
                .query({
                    __name: 'query_activeGoals',
                    goals: {
                        __args: {
                            limit,
                            order_by: [{ finished_at: 'asc' }],
                            where: {
                                owner_id: { _eq: id },
                                deleted_at: { _is_null: true },
                                status: { _eq: GOAL_STATUS_ENUM.ACTIVE },
                                // not ritual
                                _not: { goal_ritual: {} },
                                // not expired
                                finished_at: { _gte: setZeroTime(new Date(Date.now())) },
                            },
                        },
                        id: true,
                        title: true,
                        created_at: true,
                        finished_at: true,
                        is_favorite: true,
                    },
                })
                .then((res) => {
                    const data = res.goals
                    return optimizeActiveGoalsData(data)
                }),
        (e) => {
            processError(`query_activeGoals: ${e}`)
            return null
        },
    )
}
