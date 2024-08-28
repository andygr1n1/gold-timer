import { generateURQLClient } from '@/graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
import { storyResponseFragment } from '../storyResponseFragment'
import { storySchema } from '../types'

export const mutation_updateStoryIsArchived = async ({ id, isArchived }: { id: string; isArchived: boolean }) => {
    const mutation = graphql(
        `
            mutation update_story_archived($id: uuid!, $archived: Boolean!) {
                update_stories_by_pk(pk_columns: { id: $id }, _set: { archived: $archived }) {
                    id
                    ...StoryFragment
                }
            }
        `,
        [storyResponseFragment],
    )

    const urqlClient = await generateURQLClient()

    try {
        const result = await urqlClient
            .mutation(mutation, { id, archived: isArchived })
            .then((res) => storySchema.parse(res.data?.update_stories_by_pk))

        return result
    } catch (e) {
        await resolveError(e)
        return
    }
}
