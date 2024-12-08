import { generateClient } from '@/graphql/client'
import { type IGoalSchema, goalSchema } from '../../../shared-service/types'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
import { goalResponseFr } from '@/modules/goals/shared-service/fragments/goalResponseFr'

export const mutation_updateGoalDeletedAt = async (props: {
    goalId: string
    deletedAt: string | null
}): Promise<IGoalSchema | undefined> => {
    try {
        const { goalId, deletedAt } = props

        const client = await generateClient()

        const mutation = graphql(
            `
                mutation mutation_updateGoalDeletedAt($goalId: uuid!, $deletedAt: timestamptz) {
                    update_goals_by_pk(pk_columns: { id: $goalId }, _set: { deleted_at: $deletedAt }) {
                        ...GoalResponseFr
                    }
                }
            `,
            [goalResponseFr],
        )

        const res = await client.request(mutation, {
            goalId,
            deletedAt,
        })

        return goalSchema.parse(res?.update_goals_by_pk)
    } catch (e) {
        return await resolveError(e)
    }
}
