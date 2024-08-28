import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { type IGoalSchema, type IGoalStatus, goalSchema } from '@/modules/goals/shared-service'

export const mutation_goalStatus = async (props: {
    goal: IGoalSchema
    status: IGoalStatus
}): Promise<IGoalSchema | undefined> => {
    const { goal, status } = props

    return await tryCatchRequest<Promise<undefined>, IGoalSchema | undefined>(
        async () => {
            const client = await generateTSClient()

            const statusRes = await client
                .mutation({
                    __name: 'mutation_goalStatus',
                    update_goals_by_pk: {
                        __args: {
                            pk_columns: { id: goal.id },
                            _set: { status },
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
                    const zParse = goalSchema.parse(response.update_goals_by_pk)
                    return zParse
                })

            return statusRes
        },
        async (e) => await resolveError(e),
    )
}
