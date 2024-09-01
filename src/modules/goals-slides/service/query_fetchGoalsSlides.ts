import { generateURQLClient } from '../../../graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
import { goalSlidesResponseFr } from './fragments/goalSlidesResponseFr'

export const query_fetchGoalsSlides = async () => {
    const urqlClient = await generateURQLClient()

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

    try {
        const result = await urqlClient.query(query, {}).then((res) => res.data?.goals_slides)

        return result
    } catch (e) {
        await resolveError(e)
        return
    }
}
