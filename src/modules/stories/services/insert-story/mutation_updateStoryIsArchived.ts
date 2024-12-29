import { generateClient } from '@/api/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/api/tada'
import { storyResponseFr } from '../fragments/storyResponseFr'
import { storySchema } from '../types'

export const mutation_updateStoryIsArchived = async ({ id, isArchived }: { id: string; isArchived: boolean }) => {
    try {
        const mutation = graphql(
            `
                mutation update_story_archived($id: uuid!, $archived: Boolean!) {
                    update_stories_by_pk(pk_columns: { id: $id }, _set: { archived: $archived }) {
                        id
                        ...StoryResponseFr
                    }
                }
            `,
            [storyResponseFr],
        )

        const client = await generateClient()

        return await client
            .request(mutation, { id, archived: isArchived })
            .then((res) => storySchema.parse(res?.update_stories_by_pk))
    } catch (e) {
        return await resolveError(e)
    }
}
