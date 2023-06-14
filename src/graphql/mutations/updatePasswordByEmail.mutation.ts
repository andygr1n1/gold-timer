import { gql } from 'graphql-request'
import { generateClient } from '../client'

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
        console.error('updatePasswordByEmail error', e)
        alert(`updatePasswordByEmail error: ${e}`)
        return
    }
}
