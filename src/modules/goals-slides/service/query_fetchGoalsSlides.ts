import { generateClient } from '../../../graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
import { goalSlidesResponseFr } from './fragments/goalSlidesResponseFr'

export const query_fetchGoalsSlides = async () => {
    try {
        const client = await generateClient()

        const query = graphql(
            `
                query query_goal_slides {
                    goals_slides {
                        id
                        ...GoalSlidesResponseFr
                    }
                }
            `,
            [goalSlidesResponseFr],
        )

        return await client.request(query).then((res) => res.goals_slides)
    } catch (e) {
        return await resolveError(e)
    }
}
