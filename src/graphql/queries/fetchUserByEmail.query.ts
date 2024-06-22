import { gql } from 'graphql-request'
import { generateClient } from '../client'
import { processError } from '@/helpers/processMessage'

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
        const response = await client.request<{ heroes: IFetchUserByEmailResponse[] }>(query, { email })

        return response.heroes
    } catch (e) {
        processError(e, 'fetchUserByEmail error')
        return
    }
}
