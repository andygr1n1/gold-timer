import { gql } from 'graphql-request'
import { generateClient } from '../client'
import { processError } from '@/functions/processError.helper'

export const fetchUserSecret = async (user_id: string): Promise<string | undefined> => {
    const client = generateClient()
    const query = gql`
        query UserByPk($user_id: uuid!) {
            heroes_by_pk(id: $user_id) {
                password
            }
        }
    `

    try {
        const response = await client.request(query, { user_id })
        return response?.heroes_by_pk?.password
    } catch (e) {
        processError(e, 'fetchUserSecret error')
        return
    }
}
