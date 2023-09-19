import { generateClient } from '@/graphql/client'
import { processError } from '@/helpers/processError.helper'
import { gql } from 'graphql-request'

export const deleteNote = async (noteId: string): Promise<string | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation deleteNoteByPk($noteId: uuid!) {
            delete_notes_by_pk(id: $noteId) {
                id
            }
        }
    `

    try {
        const response = await client.request(mutation, { noteId })
        return response
    } catch (e) {
        processError(e, 'deleteNoteByPk error')
        return
    }
}
