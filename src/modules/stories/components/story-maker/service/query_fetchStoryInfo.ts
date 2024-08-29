import { resolveError } from '@/helpers/tryCatchRequest'
import { generateURQLClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'
import { storyResponseFr } from '@/modules/stories/services/fragments/storyResponseFr'

const query = graphql(
    `
        query query_full_story($storyId: uuid!) {
            stories(where: { id: { _eq: $storyId } }) {
                id
                ...StoryResponseFr
            }
        }
    `,
    [storyResponseFr],
)

export const query_fetchStoryInfo = async ({ storyId }: { storyId: string }) => {
    const urqlClient = await generateURQLClient()

    try {
        const result = await urqlClient.query(query, { storyId }).then((res) => res.data?.stories?.[0])

        return result
    } catch (e) {
        await resolveError(e)
        return
    }
}
