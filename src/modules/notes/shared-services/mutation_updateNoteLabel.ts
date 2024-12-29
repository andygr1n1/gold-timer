import { generateClient } from '@/api/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/api/tada'
import { getNotesLabelsGqlFields } from './getQueryFields'

export const mutation_updateNoteLabel = async ({ id, name }: { id: string; name: string }) => {
    try {
        const client = await generateClient()

        const mutation = graphql(`
                mutation mutation_updateNoteLabel($id: uuid!, $name: String) {
                    update_notes_labels_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
                       ${getNotesLabelsGqlFields()}
                    }
                }
            `)

        return await client.request(mutation, { id, name })
    } catch (e) {
        return await resolveError(e)
    }
}
