import { STATUS_ENUM } from '@/helpers/enums'
import { gql } from 'graphql-request'
import { generateClient } from '../client'

export const failGoalMutation = async (goal_id: string): Promise<STATUS_ENUM | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation failGoal($goal_id: uuid!) {
            update_goals_by_pk(pk_columns: { id: $goal_id }, _set: { status: failed }) {
                status
            }
        }
    `

    try {
        const response = await client.request(mutation, { goal_id })

        return response.update_goals_by_pk.status
    } catch (e) {
        console.error('failGoalMutation error', e)
        return
    }
}
