import { generateClient } from '@/api/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/api/tada'
import { getNotesLabelsGqlFields } from './getQueryFields'

export const mutation_deleteNoteLabel = async ({ id }: { id: string }) => {
    try {
        const client = await generateClient()

        await client.request(
            graphql(`
                mutation mutation_updateNotes($id: uuid!) {
                    update_notes(where: { label_id: { _eq: $id } }, _set: { label_id: null }) {
                        affected_rows
                    }
                }
            `),
            { id },
        )
        const response = await client.request(
            graphql(`
                mutation mutation_deleteNoteLabel($id: uuid!) {
                    delete_notes_labels_by_pk(id: $id) {
                        ${getNotesLabelsGqlFields()}
                    }
                }
            `),
            { id },
        )

        return response
    } catch (e) {
        return await resolveError(e)
    }
}
