import { gql } from 'graphql-request'
import { generateClient } from '../client'

export const deleteGoalMutation = async (goal_id: string) => {
    const client = generateClient()

    const mutation = gql`
        mutation deleteGoal($goal_id: uuid!) {
            delete_goals_by_pk(id: $goal_id) {
                id
            }
        }
    `

    try {
        const response = await client.request(mutation, { goal_id })
        return response
    } catch (e) {
        console.error('deleteGoalMutation error', e)
        return
    }
}
