import { generateURQLClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'
import { resolveError } from '@/helpers/tryCatchRequest'
import { achResponseFr } from './fragments/achResponseFr'

export const mutation_updateAchDeletedAt = async ({ id, deletedAt }: { id: string; deletedAt: string | null }) => {
    const mutation = graphql(
        `
            mutation mutation_updateAchDeletedAt($id: uuid!, $deletedAt: timestamptz) {
                update_achievements_by_pk(pk_columns: { id: $id }, _set: { deleted_at: $deletedAt }) {
                    ...AchResponseFr
                }
            }
        `,
        [achResponseFr],
    )

    const urqlClient = await generateURQLClient()

    try {
        return await urqlClient.mutation(mutation, { id, deletedAt }).then(({ error, data }) => {
            if (error) throw error
            return data
        })
    } catch (e) {
        await resolveError(e)
        return
    }
}
