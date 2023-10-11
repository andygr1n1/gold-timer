import { gql } from 'graphql-request'
import { processError } from '@/helpers/processError.helper'
import { generateClient } from '@/graphql/client'
import { getUserId } from '@/helpers/getUserId'

export const updateUserProfileImage = async (avatar: string): Promise<string | undefined> => {
    const client = generateClient()

    const id = getUserId()

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