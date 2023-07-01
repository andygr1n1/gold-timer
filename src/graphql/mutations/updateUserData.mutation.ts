import { gql } from 'graphql-request'
import { generateClient } from '../client'
import { processError } from '@/helpers/processError.helper'

export interface IBaseUserData {
    name: string
    email: string
    birthday: string
    password: string
    phone: string
}

export const updateUserData = async (userId: string, object: IBaseUserData) => {
    const client = generateClient()

    const mutation = gql`
        mutation updateUserData($userId: uuid, $object: heroes_set_input) {
            update_heroes(where: { id: { _eq: $userId } }, _set: $object) {
                affected_rows
            }
        }
    `

    try {
        const response = await client.request(mutation, { userId, object })

        return response
    } catch (e) {
        processError(e, 'updateUserData error')
        return
    }
}
