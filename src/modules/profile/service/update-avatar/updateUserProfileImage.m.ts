import { gql } from 'graphql-request'
import { processError } from '@/functions/processMessage'
import { generateClient } from '@/graphql/client'
import { getOwnerId } from '@/functions/getUserId'

export const updateUserProfileImage = async (avatar: string): Promise<string | undefined> => {
    const client = generateClient()

    const id = getOwnerId()

    const mutation = gql`
        mutation updatePasswordByEmail($id: uuid, $avatar: String) {
            update_heroes(where: { id: { _eq: $id } }, _set: { avatar: $avatar }) {
                affected_rows
            }
        }
    `

    try {
        const response = await client.request(mutation, { id, avatar })

        return response.update_heroes.affected_rows
    } catch (e) {
        processError(e, 'updateUserProfileImage error')
        return
    }
}
