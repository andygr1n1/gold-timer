import { gql } from 'graphql-request'
import { generateClient } from '../client'
import { processError } from '@/functions/processError.helper'

export interface IUserByPkResponse {
    id: string
    coins: number
    birthday: string
    email: string
    name: string
    phone: string
}

export const fetchUserByPk = async (user_id: string): Promise<IUserByPkResponse | undefined> => {
    const client = generateClient()

    const query = gql`
        query fetchUserByPk($user_id: uuid!) {
            heroes_by_pk(id: $user_id) {
                id
                coins
                birthday
                email
                name
                phone
                avatar
                addons {
                    addon
                }
            }
        }
    `

    try {
        const response = await client.request(query, { user_id })
        return response.heroes_by_pk
    } catch (e) {
        processError(e, 'fetchUserByPk')
        return
    }
}
