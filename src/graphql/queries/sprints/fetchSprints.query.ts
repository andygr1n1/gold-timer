import { processError } from '../../../helpers/processError.helper'
import { generateClient } from '@/graphql/client'
import { getUserId } from '@/helpers/getUserId'
import { ISprint$SnIn } from '@/mst/types'
import { gql } from 'graphql-request'

export const fetchSprints = async (): Promise<ISprint$SnIn[] | undefined> => {
    const client = generateClient()
    const user_id = getUserId()

    const query = gql`
        query fetchSprints($user_id: uuid) {
            sprints(where: { owner_id: { _eq: $user_id } }, order_by: { created_at: desc }) {
                achievement
                title
                started_at
                updated_at
                owner_id
                img_path
                id
                duration
                description
                created_at
                sprints_days(order_by: { date: asc }) {
                    date
                    id
                    status
                }
                sprints_goals {
                    id
                    status
                    title
                }
            }
        }
    `

    try {
        const response = await client.request(query, { user_id })
        return response.sprints
    } catch (e) {
        processError(e)
        return
    }
}
