import { STATUS_ENUM } from '@/helpers/enums'
import { gql } from 'graphql-request'
import { generateClient } from '../client'

export const updateGoalStatus = async (goal_id: string, goal_status: STATUS_ENUM): Promise<STATUS_ENUM | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation updateGoalStatus($goal_id: uuid!, $goal_status: goal_status_enum_enum) {
            update_goals_by_pk(pk_columns: { id: $goal_id }, _set: { status: $goal_status }) {
                status
            }
        }
    `

    try {
        const response = await client.request(mutation, { goal_id, goal_status })

        return response.update_goals_by_pk
    } catch (e) {
        console.error('InsertGoal error', e)
        alert(`InsertGoal error::: ${e}`)
        return
    }
}
