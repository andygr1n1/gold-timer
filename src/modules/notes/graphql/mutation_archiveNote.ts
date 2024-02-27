import { generateClient } from '@/graphql/client'
import { processError } from '@/functions/processMessage'
import { gql } from 'graphql-request'

export const mutation_archiveNote = async (note_id: string, toggleArchive: boolean) => {
    const client = generateClient()
    const archived = toggleArchive ? true : false

    const mutation = gql`
        mutation mutation_archiveNote($note_id: uuid!, $archived: Boolean) {
            update_notes_by_pk(pk_columns: { id: $note_id }, _set: { archived: $archived }) {
                archived
            }
        }
    `

    try {
        const response: any = await client.request(mutation, { note_id, archived })
        return response?.update_notes_by_pk?.archived
    } catch (e) {
        processError(e, 'mutation_archiveNote error')
        return
    }
}
