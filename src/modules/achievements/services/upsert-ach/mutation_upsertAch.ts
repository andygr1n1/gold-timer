import { generateClient } from '@/api/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import type { IAchEditor } from '../types'
import { graphql } from '@/api/tada'
import { achResponseFr } from '../fragments/achResponseFr'

export const mutation_upsertAch = async ({ values }: { values: IAchEditor }) => {
    try {
        const object = {
            id: values.id,
            title: values.title,
            description: values.description,
            img_path: values.img_path,
            is_favorite: values.is_favorite,
            freezed: values.freezed,
            created_at: values.created_at,
        }

        const mutation = graphql(
            `
                mutation mutation_upsertAch($object: achievements_insert_input!) {
                    insert_achievements_one(
                        object: $object
                        on_conflict: {
                            constraint: achievements_id_key
                            update_columns: [title, description, img_path, is_favorite, freezed, created_at]
                        }
                    ) {
                        ...AchResponseFr
                    }
                }
            `,
            [achResponseFr],
        )

        const client = await generateClient()

        return await client.request(mutation, { object })
    } catch (e) {
        return await resolveError(e)
    }
}
