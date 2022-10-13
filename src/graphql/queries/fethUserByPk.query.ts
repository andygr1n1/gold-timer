import { gql } from 'graphql-request'
import { generateClient } from '../client'

interface IUserByPkResponse {
    coins: number
    birthday: string
    email: string
    name: string
    phone: string
}

export const fethUserByPk = async (user_id: string): Promise<IUserByPkResponse | undefined> => {
    const client = generateClient()

    const query = gql`
        query UserByPk($user_id: uuid!) {
            heroes_by_pk(id: $user_id) {
                coins
                birthday
                email
                name
                phone
            }
        }
    `

    try {
        const response = await client.request(query, { user_id })

        return response.heroes_by_pk
    } catch (e) {
        console.log('fethUserByPk error:', e)
        return
    }
}
