import { gql } from 'graphql-request'
import { generateClient } from '../client'

export interface IFetchUserByEmailResponse {
    id: string
}

export const fetchUserByEmail = async (email: string): Promise<IFetchUserByEmailResponse[] | undefined> => {
    const client = generateClient()

    const query = gql`
        query fetchUserByEmail($email: String) {
            heroes(where: { email: { _eq: $email } }) {
                id
            }
        }
    `

    try {
        const response = await client.request(query, { email })

        return response.heroes
    } catch (e) {
        console.error('fetchUserByEmail error:', e)
        return
    }
}