import { generateURQLClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'
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

    const urqlClient = await generateURQLClient()

    try {
        return await urqlClient.mutation(mutation, { id, isFavorite }).then(({ error, data }) => {
            if (error) throw error
            return data
        })
    } catch (e) {
        await resolveError(e)
        return
    }
}
