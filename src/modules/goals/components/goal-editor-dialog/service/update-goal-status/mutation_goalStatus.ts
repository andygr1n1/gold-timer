import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/api/client'
import { type IGoalSchema, type IGoalStatus, goalSchema } from '@/modules/goals/shared-service'
import { goalResponseFr } from '@/modules/goals/shared-service/fragments/goalResponseFr'
import { graphql } from '@/api/tada'

export const mutation_goalStatus = async (props: {
    goal: IGoalSchema
    status: IGoalStatus
}): Promise<IGoalSchema | undefined> => {
    try {
        const { goal, status } = props

        const client = await generateClient()

        const mutation = graphql(
            `
                mutation mutation_goalStatus($goalId: uuid!, $status: String!) {
                    update_goals_by_pk(pk_columns: { id: $goalId }, _set: { status: $status }) {
                        ...GoalResponseFr
                    }
                }
            `,
            [goalResponseFr],
        )

        const res = await client.request(mutation, {
            goalId: goal.id,
            status,
        })

        return goalSchema.parse(res.update_goals_by_pk)
    } catch (e) {
        return await resolveError(e)
    }
}
