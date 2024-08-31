import { generateURQLClient } from '@/graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
import { storyMessageInsertFr } from '@/modules/stories/services/fragments/storyMessageInsertFr'

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
    updatedBy: string
}) => {
    try {
        const urqlClient = await generateURQLClient()

        const mutation = graphql(
            `
                mutation mutation_updateStoryMessage(
                    $id: uuid!
                    $description: String
                    $storyId: uuid!
                    $updatedAt: timestamptz
                ) {
                    update_stories_messages_by_pk(pk_columns: { id: $id }, _set: { description: $description }) {
                        ...StoryMessageInsertFr
                    }
                    update_stories_by_pk(pk_columns: { id: $storyId }, _set: { updated_at: $updatedAt }) {
                        id
                    }
                }
            `,
            [storyMessageInsertFr],
        )

        const { data, error } = await urqlClient.mutation(mutation, { id, description, storyId, updatedAt })

        if (error) throw error

        return data
    } catch (e) {
        await resolveError(e)
        return
    }
}
