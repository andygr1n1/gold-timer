import { generateClient } from '@/graphql/client'
import { processError } from '@/functions/processMessage'
import { gql } from 'graphql-request'

export const mutation_deleteNote = async (note_id: string, toggleDelete: boolean) => {
    const client = generateClient()
    const deleted_at = toggleDelete ? 'now' : null

    const mutation = gql`
        mutation mutation_deleteNote($note_id: uuid!, $deleted_at: timestamptz) {
            update_notes_by_pk(pk_columns: { id: $note_id }, _set: { deleted_at: $deleted_at }) {
                deleted_at
            }
        }
    `

    try {
        const response: any = await client.request(mutation, { note_id, deleted_at })
        return response?.update_notes_by_pk?.deleted_at
    } catch (e) {
        processError(e, 'mutation_deleteNote error')
        return
    }
}
