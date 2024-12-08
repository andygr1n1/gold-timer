import { generateClient } from '@/graphql/client'
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

    const client = await generateClient()

    try {
        return await client
            .request(mutation, { id, deletedAt })
            .then((res) => storySchema.parse(res?.update_stories_by_pk))
    } catch (e) {
        return await resolveError(e)
    }
}
