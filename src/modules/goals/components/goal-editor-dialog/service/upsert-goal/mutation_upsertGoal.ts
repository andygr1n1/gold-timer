import { generateClient } from '@/api/client'
import { graphql } from '@/api/tada'
import { resolveError } from '@/helpers/tryCatchRequest'
import { type IGoalSchema, goalSchema } from '@/modules/goals/shared-service'
import { goalResponseFr } from '@/modules/goals/shared-service/fragments/goalResponseFr'

export const mutation_upsertGoal = async (props: { goal: IGoalSchema }) => {
    try {
        const client = await generateClient()
        const { goal } = props

        const { goal_ritual, ...rest } = goal

        const goalRitualMutation = graphql(
            `
                mutation insert_goals_rituals_one($goal_ritual: goals_rituals_insert_input!) {
                    insert_goals_rituals_one(
                        object: $goal_ritual
                        on_conflict: {
                            constraint: goals_rituals_pkey
                            update_columns: [ritual_interval, ritual_power, ritual_type]
                        }
                    ) {
                        ritual_id
                        goal_id
                        ritual_power
                        ritual_interval
                        ritual_type
                    }
                }
            `,
            [goalResponseFr],
        )

        const goalMutation = graphql(
            `
                mutation mutation_upsertGoal($goal: goals_insert_input!) {
                    insert_goals_one(
                        object: $goal
                        on_conflict: {
                            constraint: goals_pkey
                            update_columns: [title, description, slogan, finished_at, is_favorite]
                        }
                    ) {
                        ...GoalResponseFr
                    }
                }
            `,
            [goalResponseFr],
        )

        goal.goal_ritual &&
            (await client.request(goalRitualMutation, {
                goal_ritual: { ...goal_ritual, goal_id: goal.id },
            }))

        const res = await client.request(goalMutation, {
            goal: rest,
        })

        return goalSchema.parse(res.insert_goals_one)
    } catch (e) {
        return await resolveError(e)
    }
}
