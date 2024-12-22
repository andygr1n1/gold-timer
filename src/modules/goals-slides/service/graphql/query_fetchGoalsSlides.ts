import { generateClient } from '@/graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
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

export const query_fetchGoalsSlides = async () => {
    try {
        const client = await generateClient()

        const query = queryGoalsSlides()

        return await client.request(query).then((res) => res.goals_slides)
    } catch (e) {
        return await resolveError(e)
    }
}
