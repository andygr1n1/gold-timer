import { generateClient } from '@/api/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/api/tada'
import { formatDateWithTimezone } from '@/helpers/date.helpers'
import { storyMessageResponseFr } from '@/modules/stories/services/fragments/storyMessageResponseFr'

export const mutation_deleteStoryMessage = async ({ id, storyId }: { id: string; storyId: string }) => {
    try {
        const client = await generateClient()

        const mutation = graphql(
            `
                mutation mutation_deleteStoryMessage(
                    $id: uuid!
                    $deletedAt: timestamptz
                    $storyId: uuid!
                    $updatedAt: timestamptz
                ) {
                    update_stories_messages_by_pk(pk_columns: { id: $id }, _set: { deleted_at: $deletedAt }) {
                        ...StoryMessageResponseFr
                    }
                    update_stories_by_pk(pk_columns: { id: $storyId }, _set: { updated_at: $updatedAt }) {
                        id
                    }
                }
            `,
            [storyMessageResponseFr],
        )

        return await client.request(mutation, {
            id,
            deletedAt: formatDateWithTimezone(),
            storyId,
            updatedAt: formatDateWithTimezone(),
        })
    } catch (e) {
        return await resolveError(e)
    }
}
