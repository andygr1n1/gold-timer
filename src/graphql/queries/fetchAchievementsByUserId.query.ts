import { IAchievementSnapshotIn } from '@/mst/types'
import { gql } from 'graphql-request'
import { generateClient } from '../client'

export const fetchAchievementsByUserId = async (owner_id: string): Promise<IAchievementSnapshotIn[] | undefined> => {
    const client = generateClient()

    const query = gql`
        query MyAchievements($owner_id: uuid) {
            achievements(where: { owner_id: { _eq: $owner_id } }, order_by: { created_at: desc }) {
                id
                img_path
                title
                visible
                description
                created_at
            }
        }
    `

    try {
        const response = await client.request(query, { owner_id })
        return response.achievements
    } catch (e) {
        console.error('fetchAchievementsByUserId error:', e)
        return
    }
}
