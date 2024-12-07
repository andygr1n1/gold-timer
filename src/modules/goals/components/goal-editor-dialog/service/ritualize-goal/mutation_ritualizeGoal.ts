import { resolveError } from '@/helpers/tryCatchRequest'
import { type IUpdateGoalRitualSchema } from '../types'
import { generateClient } from '@/graphql/client'
import { type IGoalSchema, goalSchema, goalStatusEnum } from '@/modules/goals/shared-service'
import { goalResponseFr } from '@/modules/goals/shared-service/fragments/goalResponseFr'
import { graphql } from '@/graphql/tada'

export const mutation_ritualizeGoal = async ({
    goalRitual,
}: {
    goalRitual: IUpdateGoalRitualSchema
}): Promise<IGoalSchema | undefined> => {
    try {
        const client = await generateClient()

        const mutation = graphql(
            `
                mutation mutation_ritualizeGoal(
                    $goalId: uuid!
                    $status: String!
                    $createdAt: timestamptz
                    $finishedAt: timestamptz
                    $ritualId: uuid!
                    $ritualPower: Int!
                ) {
                    update_goals_by_pk(
                        pk_columns: { id: $goalId }
                        _set: { status: $status, created_at: $createdAt, finished_at: $finishedAt }
                    ) {
                        ...GoalResponseFr
                    }

                    update_goals_rituals_by_pk(
                        pk_columns: { goal_id: $goalId, ritual_id: $ritualId }
                        _set: { ritual_power: $ritualPower }
                    ) {
                        goal_id
                    }
                }
            `,
            [goalResponseFr],
        )

        const res = await client.request(mutation, {
            goalId: goalRitual.goal_id,
            status: goalStatusEnum.active,
            createdAt: goalRitual.created_at,
            finishedAt: goalRitual.finished_at,
            ritualId: goalRitual.ritual_id,
            ritualPower: goalRitual.ritual_power,
        })

        return goalSchema.parse(res.update_goals_by_pk)
    } catch (e) {
        return await resolveError(e)
    }
}
