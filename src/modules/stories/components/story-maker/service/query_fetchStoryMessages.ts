import { resolveError } from '@/helpers/tryCatchRequest'
import { generateURQLClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'
import { storyMessagesResponseFragment } from '@/modules/stories/services/fragments/storyMessagesResponseFragment'

const query = graphql(
    `
        query query_full_story($storyId: uuid!) {
            stories(where: { id: { _eq: $storyId } }) {
                id

                ...StoryMessagesFragment
            }
        }
    `,
    [storyMessagesResponseFragment],
)

export const query_fetchStoryMessages = async ({ storyId }: { storyId: string }) => {
    const urqlClient = await generateURQLClient()

    try {
        const result = await urqlClient.query(query, { storyId }).then((res) => res.data?.stories?.[0])

        return result
    } catch (e) {
        await resolveError(e)
        return
    }
}
