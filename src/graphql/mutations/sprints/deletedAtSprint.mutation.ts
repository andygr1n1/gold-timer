import { gql } from 'graphql-request'
import { generateClient } from '../../client'
import { processError } from '@/helpers/processError.helper'

export const deletedAtSprint = async (id: string) => {
    const client = generateClient()

    const mutation = gql`
        mutation deletedAtSprint($id: uuid!) {
            update_sprints_by_pk(pk_columns: { id: $id }, _set: { deleted_at: "now()" }) {
                id
            }
        }
    `

    try {
        const response = await client.request(mutation, { id })
        return response.update_sprints_by_pk
    } catch (e) {
        processError(e, 'deletedAtSprint error')
        return
    }
}
