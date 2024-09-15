import { generateURQLClient } from '@/graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import type { IAchEditor } from '../types'
import { graphql } from '@/graphql/tada'
import { achResponseFr } from '../fragments/achResponseFr'

export const mutation_upsertAch = async ({ values }: { values: IAchEditor }) => {
    const object = {
        id: values.id,
        title: values.title,
        description: values.description,
        img_path: values.img_path,
        is_favorite: values.is_favorite,
        freezed: values.freezed,
    }

    const mutation = graphql(
        `
            mutation mutation_upsertAch($object: achievements_insert_input!) {
                insert_achievements_one(
                    object: $object
                    on_conflict: {
                        constraint: achievements_id_key
                        update_columns: [title, description, img_path, is_favorite, freezed]
                    }
                ) {
                    ...AchResponseFr
                }
            }
        `,
        [achResponseFr],
    )

    const urqlClient = await generateURQLClient()

    try {
        return await urqlClient.mutation(mutation, { object }).then(({ error, data }) => {
            if (error) throw error
            return data
        })
    } catch (e) {
        await resolveError(e)
        return
    }
}
