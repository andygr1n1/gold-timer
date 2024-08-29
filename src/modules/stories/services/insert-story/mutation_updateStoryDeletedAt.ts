import { generateURQLClient } from '@/graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
import { storyResponseFr } from '../fragments/storyResponseFr'
import { storySchema } from '../types'

export const mutation_updateStoryDeletedAt = async ({ id, deletedAt }: { id: string; deletedAt: string | null }) => {
    const mutation = graphql(
        `
            mutation update_story_archived($id: uuid!, $deletedAt: timestamptz) {
                update_stories_by_pk(pk_columns: { id: $id }, _set: { deleted_at: $deletedAt }) {
                    id
                    ...StoryResponseFr
                }
            }
        `,
        [storyResponseFr],
    )

    const urqlClient = await generateURQLClient()

    try {
        const result = await urqlClient
            .mutation(mutation, { id, deletedAt })
            .then((res) => storySchema.parse(res.data?.update_stories_by_pk))

        return result
    } catch (e) {
        await resolveError(e)
        return
    }
}
