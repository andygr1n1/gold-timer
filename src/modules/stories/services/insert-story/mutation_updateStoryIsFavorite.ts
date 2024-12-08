import { generateClient } from '@/graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
import { storyResponseFr } from '../fragments/storyResponseFr'

export const mutation_updateStoryIsFavorite = async ({ id, isFavorite }: { id: string; isFavorite: boolean }) => {
    try {
        const client = await generateClient()

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

        return await client.request(mutation, { id, isFavorite }).then((res) => res.update_stories_by_pk)
    } catch (e) {
        return await resolveError(e)
    }
}
