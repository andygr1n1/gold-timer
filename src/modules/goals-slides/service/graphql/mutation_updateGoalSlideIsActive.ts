import { graphql } from '@/api/tada'
import { fragment_goalSlidesResponse } from './fragment_goalSlidesResponse'

export const mutationToggleGoalSlideVisibility = () => {
    return graphql(
        `
            mutation mutation_updateGoalSlideIsActive($id: uuid!, $active: Boolean!) {
                update_goals_slides_by_pk(pk_columns: { id: $id }, _set: { active: $active }) {
                    ...GoalSlidesResponseFr
                }
            }
        `,
        [fragment_goalSlidesResponse],
    )
}
