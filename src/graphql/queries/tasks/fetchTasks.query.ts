import { processError } from './../../../helpers/processError'
import { generateClient } from '@/graphql/client'
import { ITask$SnapshotIn } from '@/mst/types'
import { gql } from 'graphql-request'

export const fetchTasks = async (user_id: string): Promise<ITask$SnapshotIn[] | undefined> => {
    const client = generateClient()

    const query = gql`
        query fetchTasks($user_id: uuid) {
            tasks(where: { user_id: { _eq: $user_id } }, order_by: { created_at: asc }) {
                description
                tag
                created_at
            }
        }
    `

    try {
        const response = await client.request(query, { user_id })

        return response.tasks
    } catch (e) {
        processError(e)
        return
    }
}
