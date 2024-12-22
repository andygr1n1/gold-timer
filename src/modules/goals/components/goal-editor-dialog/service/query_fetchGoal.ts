import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/api/client'
import { type IGoalSchema, goalSchema } from '@/modules/goals/shared-service'
import { goalResponseFr } from '@/modules/goals/shared-service/fragments/goalResponseFr'
import { graphql } from '@/api/tada'

export const query_fetchGoal = async (props: { goalId: string | null }): Promise<IGoalSchema | undefined> => {
    try {
        const { goalId } = props

        if (!goalId) return

        const client = await generateClient()

        const query = graphql(
            `
                query query_fetchGoal($goalId: uuid!) {
                    goals_by_pk(id: $goalId) {
                        ...GoalResponseFr
                    }
                }
            `,
            [goalResponseFr],
        )

        const res = await client.request(query, { goalId })

        return goalSchema.parse(res.goals_by_pk)
    } catch (e) {
        return await resolveError(e)
    }
}
