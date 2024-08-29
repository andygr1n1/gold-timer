import { generateURQLClient } from '@/graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { storySchema } from '../types'
import { graphql } from '@/graphql/tada'
import { storyResponseFr } from '../fragments/storyResponseFr'

export const mutation_updateStoryIsFavorite = async ({ id, isFavorite }: { id: string; isFavorite: boolean }) => {
    const mutation = graphql(
        `
            mutation update_story_archived($id: uuid!, $isFavorite: Boolean!) {
                update_stories_by_pk(pk_columns: { id: $id }, _set: { is_favorite: $isFavorite }) {
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
            .mutation(mutation, { id, isFavorite })
            .then((res) => storySchema.parse(res.data?.update_stories_by_pk))

        return result
    } catch (e) {
        await resolveError(e)
        return
    }
}
