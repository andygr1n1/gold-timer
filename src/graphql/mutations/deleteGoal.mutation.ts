import { gql } from 'graphql-request'
import { generateClient } from '../client'
import { processError } from '@/helpers/processError.helper'

export const deleteGoalMutation = async (goal_id: string, toggleDelete: boolean) => {
    const client = generateClient()
    const deleted_at = toggleDelete ? 'now' : null

    const mutation = gql`
        mutation deleteGoalMutation($goal_id: uuid!, $deleted_at: timestamptz) {
            update_goals_by_pk(pk_columns: { id: $goal_id }, _set: { deleted_at: $deleted_at }) {
                deleted_at
            }
        }
    `

    try {
        const response = await client.request(mutation, { goal_id, deleted_at })
        return response?.update_goals_by_pk?.deleted_at
    } catch (e) {
        processError(e, 'deleteGoalMutation error')
        return
    }
}
