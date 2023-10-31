import { gql } from 'graphql-request'
import { generateClient } from '../../../graphql/client'
import { processError } from '@/helpers/processError.helper'

export const mutation_deleteGoalSlide = async (id: string) => {
    const client = generateClient()

    const mutation = gql`
        mutation mutation_deleteGoalSlide($id: uuid!, $active: Boolean) {
            delete_goals_slides_by_pk(id: $id) {
                id
            }
        }
    `

    try {
        const response = await client.request(mutation, { id })
        return response
    } catch (e) {
        processError(e, 'mutation_deleteGoalSlide error')
        return
    }
}
