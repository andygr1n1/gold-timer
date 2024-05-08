import { dateAtZeroTime } from '@/functions/date.helpers'
import { getUserId } from '@/functions/getUserData'
import { processError } from '@/functions/processMessage'
import { resolveData } from '@/functions/resolveData'
import { generateTSClient } from '@/graphql/client'
import { optimizeActiveGoalsData } from '@/modules/goals/helpers/optimizeActiveGoalsData'
import { IGoal } from '@/modules/goals/service'

export const query_topRitualGoals = async () => {
    const client = generateTSClient()

    return await resolveData<null, IGoal[] | null>(
        () =>
            client
                .query({
                    __name: 'query_topRitualGoals',
                    goals: {
                        __args: {
                            limit: 4,
                            order_by: [{ finished_at: 'asc' }],
                            where: {
                                _and: [
                                    {
                                        owner_id: { _eq: getUserId() },
                                        deleted_at: { _is_null: true },
                                        status: { _eq: 'active' },
                                        goal_ritual: { ritual_power: { _gt: 0 } },
                                        finished_at: { _gte: dateAtZeroTime() },
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
                .then((res) => {
                    return optimizeActiveGoalsData(res?.goals || null) || null
                }),
        (e) => {
            processError(`query_topRitualGoals: ${e}`)
            return null
        },
    )
}
