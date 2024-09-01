import { type IStory } from '../types'
import { resolveError } from '@/helpers/tryCatchRequest'
import { generateURQLClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'
import { storyResponseFr } from '../fragments/storyResponseFr'

export const query_story = async ({ storyId }: { storyId: string }): Promise<IStory | undefined | null> => {
    const query = graphql(
        `
            query query_story($storyId: uuid!) {
                stories_by_pk(id: $storyId) {
                    ...StoryResponseFr
                }
            }
        `,
        [storyResponseFr],
    )

    const urqlClient = await generateURQLClient()

    try {
        const result = await urqlClient.query(query, { storyId }).then((res) => res.data?.stories_by_pk)

        return result
    } catch (e) {
        await resolveError(e)
        return
    }
}
