import { generateURQLClient } from '@/graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
import { storyMessageInsertFr } from '@/modules/stories/services/fragments/storyMessageInsertFr'

export const mutation_insertStoryMessage = async ({
    html,
    storyId,
    imgPath,
}: {
    html: string
    storyId: string
    imgPath: string[]
}) => {
    try {
        const urqlClient = await generateURQLClient()

        const mutation = graphql(
            `
                mutation mutation_insertStoryMessage($object: stories_messages_insert_input!) {
                    insert_stories_messages_one(object: $object) {
                        ...StoryMessageInsertFr
                    }
                }
            `,
            [storyMessageInsertFr],
        )

        const object = {
            story_id: storyId,
            description: html,
            img_path: imgPath,
        }

        const { data, error } = await urqlClient.mutation(mutation, { object })

        if (error) throw error

        return data
    } catch (e) {
        await resolveError(e)
        return
    }
}
