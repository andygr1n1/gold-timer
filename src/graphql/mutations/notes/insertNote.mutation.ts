import { generateClient } from '@/graphql/client'
import { processError } from '@/helpers/processError.helper'
import { INote$, INoteSnapshotIn } from '@/modules/notes/mst/types'
import { gql } from 'graphql-request'

export const upsertNote = async (newTask: INoteSnapshotIn): Promise<INote$ | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation insert_notes_one($newTask: notes_insert_input!) {
            insert_notes_one(
                object: $newTask
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
        const response = await client.request(mutation, { newTask })

        return response.insert_notes_one
    } catch (e) {
        processError(e, 'insertNote error')
        return
    }
}
