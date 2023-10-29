import { processError } from '../../../helpers/processError.helper'
import { generateClient } from '@/graphql/client'
import { INote$SnapshotIn } from '@/modules/notes/mst/types'
import { gql } from 'graphql-request'

export const query_fetchNotes = async (owner_id: string): Promise<INote$SnapshotIn[] | undefined> => {
    const client = generateClient()

    const query = gql`
        query query_fetchNotes($owner_id: uuid) {
            notes(where: { owner_id: { _eq: $owner_id } }, order_by: { created_at: asc }) {
                description
                tag
                created_at
                id
                deleted_at
            }
        }
    `

    try {
        const response = await client.request(query, { owner_id })

        return response.notes
    } catch (e) {
        processError(e, 'query_fetchNotes error')
        return
    }
}
