import { optimizeActiveGoalsData } from '../../../helpers/optimizeActiveGoalsData'
import { processError } from '../../../../../functions/processMessage'
import { resolveData } from '@/functions/resolveData'
import { generateTSClient } from '@/graphql/client'
import { IActiveGoalOptimized } from '../../../interfaces/types'

export const query_fetchGoalById = async (goal_id: string): Promise<IActiveGoalOptimized | null> => {
    const client = generateTSClient()

    return await resolveData<null, IActiveGoalOptimized | null>(
        () =>
            client
                .query({
                    __name: 'query_fetchGoalById',
                    goals_by_pk: {
                        __args: { id: goal_id },
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
                    return optimizeActiveGoalsData(res.goals_by_pk)?.[0] || null
                }),
        (e) => {
            processError(`query_fetchGoalById: ${e}`)
            return null
        },
    )
}
