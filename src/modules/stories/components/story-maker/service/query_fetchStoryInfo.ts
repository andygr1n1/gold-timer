import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/api/client'
import { graphql } from '@/api/tada'
import { storyResponseFr } from '@/modules/stories/services/fragments/storyResponseFr'

export const query_fetchStoryInfo = async ({ storyId }: { storyId: string }) => {
    try {
        const client = await generateClient()

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

        return await client.request(query, { storyId }).then((res) => res?.stories?.[0])
    } catch (e) {
        return await resolveError(e)
    }
}
