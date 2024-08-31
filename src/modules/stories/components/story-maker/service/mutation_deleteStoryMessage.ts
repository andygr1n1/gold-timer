import { generateURQLClient } from '@/graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
import { storyMessageInsertFr } from '@/modules/stories/services/fragments/storyMessageInsertFr'
import { formatDateWithTimezone } from '@/helpers/date.helpers'

export const mutation_deleteStoryMessage = async ({ id }: { id: string }) => {
    try {
        const urqlClient = await generateURQLClient()

        const mutation = graphql(
            `
                mutation mutation_deleteStoryMessage($id: uuid!, $deletedAt: timestamptz) {
                    update_stories_messages_by_pk(pk_columns: { id: $id }, _set: { deleted_at: $deletedAt }) {
                        ...StoryMessageInsertFr
                    }
                }
            `,
            [storyMessageInsertFr],
        )

        const { data, error } = await urqlClient.mutation(mutation, { id, deletedAt: formatDateWithTimezone() })

        if (error) throw error

        return data
    } catch (e) {
        await resolveError(e)
        return
    }
}
