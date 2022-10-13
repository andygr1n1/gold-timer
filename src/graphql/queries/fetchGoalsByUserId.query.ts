import { IGoalSnapshotIn } from '@/mst/types'
import { gql } from 'graphql-request'
import { generateClient } from '../client'

export const fetchGoalsByUserId = async (owner_id: string): Promise<IGoalSnapshotIn[] | undefined> => {
    const client = generateClient()

    const query = gql`
        query MyQuery($owner_id: uuid) {
            goals(where: { owner_id: { _eq: $owner_id } }, order_by: { finished_at: asc }) {
                id
                owner_id
                created_at
                description
                difficulty
                finished_at
                privacy
                round
                slogan
                status
                title
            }
        }
    `

    try {
        const response = await client.request(query, { owner_id })

        return response.goals
    } catch (e) {
        console.error('fetchGoalsByUserId error:', e)
        return
    }
}
