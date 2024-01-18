import { processError } from '../../../functions/processMessage'
import { generateClient } from '@/graphql/client'
import { INote$SnapshotIn } from '@/modules/notes/mst/types'
import { gql } from 'graphql-request'
import { getOwnerId } from '@/functions/getUserId'
import { fetchData } from '@/functions/fetchData'

export const query_fetchNotes = async (): Promise<INote$SnapshotIn[]> => {
    const client = generateClient()
    const owner_id = getOwnerId()

    const query = gql`
        query query_fetchNotes($owner_id: uuid) {
            notes(where: { owner_id: { _eq: $owner_id } }, order_by: { created_at: asc }) {
                description
                tag
                created_at
                id
                deleted_at
                archived
            }
        }
    `

    return await fetchData<INote$SnapshotIn[], INote$SnapshotIn[]>(
        () => client.request(query, { owner_id }).then((res) => res.notes),
        (e) => {
            processError(`query_fetchNotes: ${e}`)
            return []
        },
    )
}
