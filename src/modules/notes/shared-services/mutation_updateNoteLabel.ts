import { generateURQLClient } from '@/graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
import { getNotesLabelsGqlFields } from './getQueryFields'

export const mutation_updateNoteLabel = async ({ id, name }: { id: string; name: string }) => {
    const urqlClient = await generateURQLClient()

    try {
        const response = await urqlClient.mutation(
            graphql(`
                mutation mutation_updateNoteLabel($id: uuid!, $name: String) {
                    update_notes_labels_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
                       ${getNotesLabelsGqlFields()}
                    }
                }
            `),
            { id, name },
        )

        if (response.error) throw new Error(response.error.toString())

        return response
    } catch (e) {
        await resolveError(e)
        return
    }
}
