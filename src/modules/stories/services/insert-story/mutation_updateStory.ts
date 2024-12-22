import { generateClient } from '@/api/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/api/tada'
import { type INewStorySchema } from '../types'
import { storyResponseFr } from '../fragments/storyResponseFr'
import { formatDateWithTimezone } from '@/helpers/date.helpers'

export const mutation_updateStory = async ({ values }: { values: INewStorySchema }) => {
    try {
        const client = await generateClient()

        const query = graphql(
            `
                mutation mutation_updateStory($id: uuid!, $img_path: String, $title: String, $updated_at: timestamptz) {
                    update_stories_by_pk(
                        pk_columns: { id: $id }
                        _set: { img_path: $img_path, title: $title, updated_at: $updated_at }
                    ) {
                        ...StoryResponseFr
                    }
                }
            `,
            [storyResponseFr],
        )

        return await client
            .request(query, {
                id: values.id,
                img_path: values.img_path,
                title: values.title,
                updated_at: formatDateWithTimezone(),
            })
            .then((res) => res?.update_stories_by_pk)
    } catch (e) {
        return await resolveError(e)
    }
}
