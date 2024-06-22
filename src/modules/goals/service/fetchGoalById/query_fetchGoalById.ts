import { optimizeActiveGoalsData } from '../../helpers/optimizeActiveGoalsData'
import { processError } from '../../../../helpers/processMessage'
import { resolveData } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { IGoal } from '../types'
import { newGoalTemplate } from '../../stores/editGoal.store'
import { selectedGoalAtom, selectedGoalAtom$ } from '../../stores/selectedGoal.store'

export const query_fetchGoalById = async (goal_id: string): Promise<IGoal | null> => {
    const client = await generateTSClient()
    const selectedGoal = selectedGoalAtom$.get(selectedGoalAtom)

    if (selectedGoal?.is_new)
        return optimizeActiveGoalsData(newGoalTemplate(selectedGoal.id, selectedGoal.parent_goal_id) as IGoal)[0]

    return await resolveData<null, IGoal | null>(
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
                    return optimizeActiveGoalsData(res.goals_by_pk as IGoal)?.[0] || null
                }),
        (e) => {
            processError(`query_fetchGoalById: ${e}`)
            return null
        },
    )
}
