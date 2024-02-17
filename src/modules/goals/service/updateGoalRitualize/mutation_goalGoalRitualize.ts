import { optimizeActiveGoalsData } from '@/modules/goals/helpers/optimizeActiveGoalsData'
import { resolveData } from '@/functions/resolveData'
import { processError } from '@/functions/processMessage'
import { Client } from '@/graphql/generated'
import { IActiveGoalOptimized } from '../types'
import { IRitualizeUpdateFields } from './types'

export const mutation_goalGoalRitualize = async (
    client: Client,
    updateFields: IRitualizeUpdateFields,
): Promise<IActiveGoalOptimized | null> => {
    return await resolveData<null, IActiveGoalOptimized | null>(
        () =>
            client
                .mutation({
                    __name: 'mutation_goalGoalRitualize',
                    update_goals_by_pk: {
                        __args: {
                            pk_columns: { id: updateFields.id },
                            _set: { created_at: updateFields.created_at, finished_at: updateFields.finished_at },
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
                    update_goals_rituals_by_pk: {
                        __args: {
                            pk_columns: { goal_id: updateFields.id, ritual_id: updateFields.ritual_id },
                            _set: { ritual_power: updateFields.ritual_power },
                        },
                        goal_id: true,
                    },
                })
                .then((res) => {
                    return optimizeActiveGoalsData(res.update_goals_by_pk)[0]
                }),
        (e) => {
            processError(`mutation_goalGoalRitualize: ${e}`)
            return null
        },
    )
}
