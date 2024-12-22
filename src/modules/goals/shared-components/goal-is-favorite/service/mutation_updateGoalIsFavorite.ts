import { generateClient } from '@/api/client'
import { type IGoalSchema, goalSchema } from '../../../shared-service/types'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/api/tada'
import { goalResponseFr } from '@/modules/goals/shared-service/fragments/goalResponseFr'

export const mutation_updateGoalIsFavorite = async (props: {
    goalId: string
    isFavorite: boolean
}): Promise<IGoalSchema | undefined> => {
    try {
        const { goalId, isFavorite } = props

        const client = await generateClient()

        const mutation = graphql(
            `
                mutation mutation_updateGoalIsFavorite($goalId: uuid!, $isFavorite: Boolean!) {
                    update_goals_by_pk(pk_columns: { id: $goalId }, _set: { is_favorite: $isFavorite }) {
                        ...GoalResponseFr
                    }
                }
            `,
            [goalResponseFr],
        )

        const res = await client.request(mutation, {
            goalId,
            isFavorite,
        })

        return goalSchema.parse(res.update_goals_by_pk)
    } catch (e) {
        return await resolveError(e)
    }
}
