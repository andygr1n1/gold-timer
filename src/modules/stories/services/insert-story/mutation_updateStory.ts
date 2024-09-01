import { generateURQLClient } from '@/graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
import { type INewStorySchema } from '../types'
import { storyResponseFr } from '../fragments/storyResponseFr'
import { formatDateWithTimezone } from '@/helpers/date.helpers'

export const mutation_updateStory = async ({ values }: { values: INewStorySchema }) => {
    const urqlClient = await generateURQLClient()

    try {
        const result = await urqlClient
            .mutation(
                graphql(
                    `
                        mutation mutation_updateStory(
                            $id: uuid!
                            $img_path: String
                            $title: String
                            $updated_at: timestamptz
                        ) {
                            update_stories_by_pk(
                                pk_columns: { id: $id }
                                _set: { img_path: $img_path, title: $title, updated_at: $updated_at }
                            ) {
                                ...StoryResponseFr
                            }
                        }
                    `,
                    [storyResponseFr],
                ),
                { id: values.id, img_path: values.img_path, title: values.title, updated_at: formatDateWithTimezone() },
            )
            .then((res) => res.data?.update_stories_by_pk)

        return result
    } catch (e) {
        await resolveError(e)
        return
    }
}
