import { graphql } from '@/api/tada'
import { fragment_goalSlidesResponse } from './fragment_goalSlidesResponse'

export const mutationDeleteGoalSlide = () => {
    return graphql(
        `
            mutation mutation_deleteGoalSlide($id: uuid!) {
                delete_goals_slides_by_pk(id: $id) {
                    ...GoalSlidesResponseFr
                }
            }
        `,
        [fragment_goalSlidesResponse],
    )
}
