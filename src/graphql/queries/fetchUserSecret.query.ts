import { gql } from 'graphql-request'
import { generateClient } from '../client'
import { processError } from '@/helpers/processMessage'
import { heroes } from 'gold-timer-genql/lib/generated'

export const fetchUserSecret = async (user_id: string): Promise<string | undefined | null> => {
    const client = generateClient()
    const query = gql`
        query UserByPk($user_id: uuid!) {
            heroes_by_pk(id: $user_id) {
                password
            }
        }
    `

    try {
        const response = await client.request<{ heroes_by_pk: heroes }>(query, { user_id })
        return response?.heroes_by_pk?.password
    } catch (e) {
        processError(e, 'fetchUserSecret error')
        return
    }
}
