import { generateURQLClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'
import { resolveError } from '@/helpers/tryCatchRequest'
import { achResponseFr } from '@/modules/achievements/services/fragments/achResponseFr'

export const mutation_freezeAch = async ({ id, freezed }: { id: string; freezed: boolean }) => {
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

    const urqlClient = await generateURQLClient()

    try {
        return await urqlClient.mutation(mutation, { id, freezed }).then(({ error, data }) => {
            if (error) throw error
            return data
        })
    } catch (e) {
        await resolveError(e)
        return
    }
}
