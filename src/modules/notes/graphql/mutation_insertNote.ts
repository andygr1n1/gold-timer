import { generateClient } from '@/graphql/client'
import { processError } from '@/functions/processMessage'
import { INote$, INoteSnapshotIn } from '@/modules/notes/mst/types'
import { gql } from 'graphql-request'

export const upsertNote = async (newNote: INoteSnapshotIn): Promise<INote$ | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation insert_notes_one($newNote: notes_insert_input!) {
            insert_notes_one(
                object: $newNote
                on_conflict: { constraint: tasks_pkey, update_columns: [description, tag] }
            ) {
                id
                description
                tag
                created_at
            }
        }
    `

    try {
        const response: any = await client.request(mutation, { newNote })

        return response.insert_notes_one
    } catch (e) {
        processError(e, 'insertNote error')
        return
    }
}
