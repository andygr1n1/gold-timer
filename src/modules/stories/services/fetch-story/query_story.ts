import { type IStory } from '../types'
import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/api/client'
import { graphql } from '@/api/tada'
import { storyResponseFr } from '../fragments/storyResponseFr'

export const query_story = async ({ storyId }: { storyId: string }): Promise<IStory | undefined | null> => {
    try {
        const client = await generateClient()
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

        return await client.request(query, { storyId }).then((res) => res?.stories_by_pk)
    } catch (e) {
        return await resolveError(e)
    }
}
