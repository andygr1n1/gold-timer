import { generateTSClient } from '@/graphql/client'
import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { type IGoalSchema, goalSchema } from '@/modules/goals/shared-service'

export const mutation_upsertGoal = async (props: { goal: IGoalSchema }) => {
    const client = await generateTSClient()
    const { goal } = props

    const { goal_ritual, ...rest } = goal
    const object = rest

    return await tryCatchRequest<Promise<undefined>, IGoalSchema | undefined>(
        () =>
            client
                .mutation({
                    __name: 'mutation_upsertGoal',
                    insert_goals_rituals_one: goal.goal_ritual
                        ? {
                              __args: {
                                  object: { ...goal_ritual, goal_id: goal.id },
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
                            object,
                            on_conflict: {
                                constraint: 'goals_pkey',
                                update_columns: ['title', 'description', 'slogan', 'finished_at', 'is_favorite'],
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
                    const zParse = goalSchema.parse(response.insert_goals_one)
                    return zParse
                }),
        async (e) => await resolveError(e),
    )
}
