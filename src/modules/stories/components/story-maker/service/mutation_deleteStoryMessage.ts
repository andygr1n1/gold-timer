import { generateURQLClient } from '@/graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
import { formatDateWithTimezone } from '@/helpers/date.helpers'
import { storyMessageResponseFr } from '@/modules/stories/services/fragments/storyMessageResponseFr'

export const mutation_deleteStoryMessage = async ({
    id,
    storyId,
}: {
    id: string
    storyId: string
}) => {
    try {
        const urqlClient = await generateURQLClient()

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

        const { data, error } = await urqlClient.mutation(mutation, {
            id,
            deletedAt: formatDateWithTimezone(),
            storyId,
            updatedAt: formatDateWithTimezone(),
        })

        if (error) throw error

        return data
    } catch (e) {
        await resolveError(e)
        return
    }
}
