import { graphql } from '@/api/tada'
import { fragment_goalSlidesResponse } from './fragment_goalSlidesResponse'

export const queryGoalsSlides = () => {
    const query = graphql(
        `
            query query_goal_slides {
                goals_slides(order_by: { created_at: desc }) {
                    ...GoalSlidesResponseFr
                }
            }
        `,
        [fragment_goalSlidesResponse],
    )
    return query
}
