import { generateURQLClient } from '@/graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
import { type INewStorySchema } from '../types'

export const mutation_insertStory = async ({ values }: { values: INewStorySchema }) => {
    const urqlClient = await generateURQLClient()

    const object = {
        title: values.title,
        img_path: values.img_path || null,
    }

    try {
        const result = await urqlClient
            .mutation(
                graphql(`
                    mutation mutation_mutation_insertStory($object: stories_insert_input!) {
                        insert_stories_one(object: $object) {
                            id
                            title
                            img_path
                        }
                    }
                `),
                { object },
            )
            .then((res) => res.data?.insert_stories_one)

        return result
    } catch (e) {
        await resolveError(e)
        return
    }
}
