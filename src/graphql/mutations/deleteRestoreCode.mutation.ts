import { gql } from 'graphql-request'
import { generateClient } from '../client'

export const deleteRestoreCode = async (code: string) => {
    const client = generateClient()

    const mutation = gql`
        mutation deleteGoal($code: uuid!) {
            delete_restore_codes_by_pk(id: $code) {
                id
            }
        }
    `

    try {
        const response = await client.request(mutation, { code })
        return response
    } catch (e) {
        console.error('deleteRestoreCode error', e)
        return
    }
}
