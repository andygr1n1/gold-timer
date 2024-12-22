import { generateClient } from '@/api/client'
import { graphql } from '@/api/tada'
import { resolveError } from '@/helpers/tryCatchRequest'
import { achResponseFr } from '@/modules/achievements/services/fragments/achResponseFr'

export const mutation_freezeAch = async ({ id, freezed }: { id: string; freezed: boolean }) => {
    try {
        const mutation = graphql(
            `
                mutation mutation_updateAchFreezed($id: uuid!, $freezed: Boolean!) {
                    update_achievements_by_pk(pk_columns: { id: $id }, _set: { freezed: $freezed }) {
                        ...AchResponseFr
                    }
                }
            `,
            [achResponseFr],
        )

        const client = await generateClient()

        return await client.request(mutation, { id, freezed })
    } catch (e) {
        await resolveError(e)
        return
    }
}
