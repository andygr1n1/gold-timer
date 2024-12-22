import { generateClient } from '@/api/client'
import { graphql } from '@/api/tada'
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

    const client = await generateClient()

    try {
        return await client.request(mutation, { id, deletedAt })
    } catch (e) {
        return await resolveError(e)
    }
}
