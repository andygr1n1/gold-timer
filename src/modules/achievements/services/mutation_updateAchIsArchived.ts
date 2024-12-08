import { generateClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'
import { resolveError } from '@/helpers/tryCatchRequest'
import { achResponseFr } from './fragments/achResponseFr'

export const mutation_updateAchIsArchived = async ({ id, isArchived }: { id: string; isArchived: boolean }) => {
    const mutation = graphql(
        `
            mutation update_ach_archived($id: uuid!, $archived: Boolean!) {
                update_achievements_by_pk(pk_columns: { id: $id }, _set: { archived: $archived }) {
                    ...AchResponseFr
                }
            }
        `,
        [achResponseFr],
    )

    const client = await generateClient()

    try {
        return await client.request(mutation, { id, archived: isArchived })
    } catch (e) {
        return await resolveError(e)
    }
}
