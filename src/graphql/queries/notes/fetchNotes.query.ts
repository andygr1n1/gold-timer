import { processError } from '../../../helpers/processError.helper'
import { generateClient } from '@/graphql/client'
import { INote$SnapshotIn } from '@/modules/notes/mst/types'
import { gql } from 'graphql-request'

export const fetchAllNotesByUserId = async (user_id: string): Promise<INote$SnapshotIn[] | undefined> => {
    const client = generateClient()

    const query = gql`
        query fetchAllNotesByUserId($user_id: uuid) {
            tasks(where: { user_id: { _eq: $user_id } }, order_by: { created_at: asc }) {
                description
                tag
                created_at
                id
            }
        }
    `

    try {
        const response = await client.request(query, { user_id })

        return response.tasks
    } catch (e) {
        processError(e, 'fetchAllNotesByUserId error')
        return
    }
}

export const fetchNotesBaseDataByUserId = async (owner_id: string): Promise<INote$SnapshotIn[] | undefined> => {
    const client = generateClient()

    const query = gql`
        query fetchNotesBaseDataByUserId($owner_id: uuid) {
            tasks(where: { user_id: { _eq: $owner_id } }, order_by: { created_at: asc }) {
                id
            }
        }
    `

    try {
        const response = await client.request(query, { owner_id })

        return response.tasks
    } catch (e) {
        processError(e, 'fetchNotesBaseDataByUserId error')
        return
    }
}
