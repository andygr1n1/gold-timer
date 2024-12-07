import { generateClient } from '@/graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
import { storyMessageResponseFr } from '@/modules/stories/services/fragments/storyMessageResponseFr'

export const mutation_updateStoryMessage = async ({
    id,
    description,
    storyId,
    updatedAt,
}: {
    description: string
    id: string
    storyId: string
    updatedAt: string
}) => {
    try {
        const client = await generateClient()

        const mutation = graphql(
            `
                mutation mutation_updateStoryMessage(
                    $id: uuid!
                    $description: String
                    $storyId: uuid!
                    $updatedAt: timestamptz
                ) {
                    update_stories_messages_by_pk(pk_columns: { id: $id }, _set: { description: $description }) {
                        ...StoryMessageResponseFr
                    }
                    update_stories_by_pk(pk_columns: { id: $storyId }, _set: { updated_at: $updatedAt }) {
                        id
                    }
                }
            `,
            [storyMessageResponseFr],
        )

        return await client.request(mutation, { id, description, storyId, updatedAt })
    } catch (e) {
        return await resolveError(e)
    }
}
