import { gql } from 'graphql-request'
import { generateClient } from '../client'
import { processError } from '@/helpers/processError.helper'

export const updatePasswordByEmail = async (email: string, password: string): Promise<string | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation updatePasswordByEmail($email: String, $password: String) {
            update_heroes(where: { email: { _eq: $email } }, _set: { password: $password }) {
                affected_rows
            }
        }
    `

    try {
        const response = await client.request(mutation, { email, password })

        return response.update_heroes.affected_rows
    } catch (e) {
        processError(e, 'updatePasswordByEmail error')
        return
    }
}
