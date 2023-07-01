import { gql } from 'graphql-request'
import { generateClient } from '../client'
import { processError } from '@/helpers/processError.helper'

export const deleteGoalMutation = async (goal_id: string) => {
    const client = generateClient()

    const mutation = gql`
        mutation deleteGoalMutation($goal_id: uuid!) {
            delete_goals_by_pk(id: $goal_id) {
                id
            }
        }
    `

    try {
        const response = await client.request(mutation, { goal_id })
        return response
    } catch (e) {
        processError(e, 'deleteGoalMutation error')
        return
    }
}
