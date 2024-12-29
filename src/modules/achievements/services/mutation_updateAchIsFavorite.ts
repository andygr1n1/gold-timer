import { generateClient } from '@/api/client'
import { graphql } from '@/api/tada'
import { resolveError } from '@/helpers/tryCatchRequest'
import { achResponseFr } from './fragments/achResponseFr'

export const mutation_updateAchIsFavorite = async ({ id, isFavorite }: { id: string; isFavorite: boolean }) => {
    const mutation = graphql(
        `
            mutation mutation_updateAchIsFavorite($id: uuid!, $isFavorite: Boolean!) {
                update_achievements_by_pk(pk_columns: { id: $id }, _set: { is_favorite: $isFavorite }) {
                    ...AchResponseFr
                }
            }
        `,
        [achResponseFr],
    )

    const client = await generateClient()

    try {
        return await client.request(mutation, { id, isFavorite })
    } catch (e) {
        return await resolveError(e)
    }
}
