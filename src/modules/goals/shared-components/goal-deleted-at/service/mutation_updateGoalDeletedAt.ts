import { generateTSClient } from '@/graphql/client'
import { type IGoalSchema, goalSchema } from '../../../shared-service/types'
import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'

export const mutation_updateGoalDeletedAt = async (props: {
    goalId: string
    deletedAt: string | null
}): Promise<IGoalSchema | undefined> => {
    const { goalId, deletedAt } = props
    return await tryCatchRequest<Promise<undefined>, IGoalSchema | undefined>(
        async () => {
            const client = await generateTSClient()
            return await client
                .mutation({
                    __name: 'mutation_updateGoalDeletedAt',
                    update_goals_by_pk: {
                        __args: {
                            pk_columns: { id: goalId },
                            _set: { deleted_at: deletedAt },
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
        },
        async (e) => await resolveError(e),
    )
}
