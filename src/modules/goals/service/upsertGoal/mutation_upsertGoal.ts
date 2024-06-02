import { optimizeActiveGoalsData } from '../../helpers/optimizeActiveGoalsData'
import { IInsertRitual, IInsertNewGoal } from '@/modules/goals/service/types'
import { processError } from '@/functions/processMessage'
import { generateTSClient } from '@/graphql/client'
import { resolveData } from '@/functions/tryCatchRequest'
import { IGoal } from '@/modules/goals/service/types'

export const mutation_upsertGoal = async (newGoal: IInsertNewGoal, newRitual?: IInsertRitual) => {
    const client = generateTSClient()

    return await resolveData<null, IGoal[] | null>(
        () =>
            client
                .mutation({
                    __name: 'mutation_upsertGoal',
                    insert_goals_rituals_one: newRitual
                        ? {
                              __args: {
                                  object: newRitual,
                                  on_conflict: {
                                      constraint: 'goals_rituals_pkey',
                                      update_columns: ['ritual_interval', 'ritual_power', 'ritual_type'],
                                  },
                              },
                              ritual_id: true,
                              goal_id: true,
                              ritual_power: true,
                              ritual_interval: true,
                              ritual_type: true,
                          }
                        : undefined,
                    insert_goals_one: {
                        __args: {
                            object: newGoal,
                            on_conflict: {
                                constraint: 'goals_pkey',
                                update_columns: ['title', 'description', 'slogan', 'finished_at'],
                            },
                        },
                        id: true,
                        owner_id: true,
                        title: true,
                        slogan: true,
                        description: true,
                        status: true,
                        privacy: true,
                        created_at: true,
                        finished_at: true,
                        is_favorite: true,
                        difficulty: true,
                        parent_goal_id: true,
                        deleted_at: true,
                        goal_ritual: {
                            ritual_id: true,
                            goal_id: true,
                            ritual_power: true,
                            ritual_interval: true,
                            ritual_type: true,
                        },
                    },
                })
                .then((res) => {
                    return res.insert_goals_one ? optimizeActiveGoalsData(res.insert_goals_one as IGoal) : null
                }),
        (e) => {
            processError(`mutation_upsertGoal: ${e}`)
            return null
        },
    )
}
