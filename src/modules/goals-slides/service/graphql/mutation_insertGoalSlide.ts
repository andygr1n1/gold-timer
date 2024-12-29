import { graphql } from '@/api/tada'
import { fragment_goalSlidesResponse } from './fragment_goalSlidesResponse'

export const mutationInsertGoalSlide = () => {
    return graphql(
        `
            mutation mutation_insertGoalSlide($title: String!, $img_path: String!) {
                insert_goals_slides_one(object: { title: $title, img_path: $img_path }) {
                    ...GoalSlidesResponseFr
                }
            }
        `,
        [fragment_goalSlidesResponse],
    )
}
