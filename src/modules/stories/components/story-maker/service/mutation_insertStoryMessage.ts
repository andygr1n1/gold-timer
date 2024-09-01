import { generateURQLClient } from '@/graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
import { storyMessageResponseFr } from '@/modules/stories/services/fragments/storyMessageResponseFr'

export const mutation_insertStoryMessage = async ({
    html,
    storyId,
    imgPath,
    updatedAt,
}: {
    html: string
    storyId: string
    imgPath: string[]
    updatedAt: string
}) => {
    try {
        const urqlClient = await generateURQLClient()

        const mutation = graphql(
            `
                mutation mutation_insertStoryMessage(
                    $object: stories_messages_insert_input!
                    $storyId: uuid!
                    $updatedAt: timestamptz
                ) {
                    insert_stories_messages_one(object: $object) {
                        ...StoryMessageResponseFr
                    }
                    update_stories_by_pk(pk_columns: { id: $storyId }, _set: { updated_at: $updatedAt }) {
                        id
                    }
                }
            `,
            [storyMessageResponseFr],
        )

        const object = {
            story_id: storyId,
            description: html,
            img_path: imgPath,
        }

        const { data, error } = await urqlClient.mutation(mutation, {
            object,
            storyId,
            updatedAt,
        })

        if (error) throw error

        return data
    } catch (e) {
        await resolveError(e)
        return
    }
}
