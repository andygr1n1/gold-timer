import { generateClient } from '@/api/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/api/tada'
import { type INewStorySchema } from '../types'

export const mutation_insertStory = async ({ values }: { values: INewStorySchema }) => {
    try {
        const client = await generateClient()

        const object = {
            title: values.title,
            img_path: values.img_path || null,
        }

        return await client
            .request(
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
            .then((res) => res.insert_stories_one)
    } catch (e) {
        return await resolveError(e)
    }
}
