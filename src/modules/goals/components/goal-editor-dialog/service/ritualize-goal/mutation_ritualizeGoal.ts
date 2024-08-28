import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { type IUpdateGoalRitualSchema } from '../types'
import { generateTSClient } from '@/graphql/client'
import { type IGoalSchema, goalSchema, goalStatusEnum } from '@/modules/goals/shared-service'

export const mutation_ritualizeGoal = async (props: {
    goalRitual: IUpdateGoalRitualSchema
}): Promise<IGoalSchema | undefined> => {
    return await tryCatchRequest<Promise<undefined>, IGoalSchema | undefined>(
        async () => {
            const client = await generateTSClient()
            const { goalRitual } = props
            return client
                .mutation({
                    __name: 'mutation_ritualizeGoal',
                    update_goals_by_pk: {
                        __args: {
                            pk_columns: { id: goalRitual.goal_id },
                            _set: {
                                created_at: goalRitual.created_at,
                                finished_at: goalRitual.finished_at,
                                status: goalStatusEnum.active,
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
                    update_goals_rituals_by_pk: {
                        __args: {
                            pk_columns: { goal_id: goalRitual.goal_id, ritual_id: goalRitual.ritual_id },
                            _set: { ritual_power: goalRitual.ritual_power },
                        },
                        goal_id: true,
                    },
                })
                .then((response) => {
                    const zParse = goalSchema.parse(response.update_goals_by_pk)
                    return zParse
                })
        },
        async (e) => await resolveError(e),
    )
}
