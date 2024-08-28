import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { type IGoalSchema, goalSchema } from '@/modules/goals/shared-service'

export const query_fetchGoal = async (props: { goalId: string | null }): Promise<IGoalSchema | undefined> => {
    const { goalId } = props

    if (!goalId) return

    return await tryCatchRequest<Promise<undefined>, IGoalSchema | undefined>(
        async () => {
            const client = await generateTSClient()
            return await client
                .query({
                    __name: 'query_fetchGoal',
                    goals_by_pk: {
                        __args: {
                            id: goalId,
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
                    const zParse = goalSchema.parse(response.goals_by_pk)
                    return zParse
                })
        },
        async (e) => await resolveError(e),
    )
}
