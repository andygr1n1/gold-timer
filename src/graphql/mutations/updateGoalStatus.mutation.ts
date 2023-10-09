import { GOAL_STATUS_ENUM } from '@/helpers/enums'
import { gql } from 'graphql-request'
import { generateClient } from '../client'
import { processError } from '@/helpers/processError.helper'

export const updateGoalStatusToCompleted = async (goal_id: string): Promise<GOAL_STATUS_ENUM | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation updateGoalStatusToCompleted($goal_id: uuid!, $goal_status: goal_status_enum_enum) {
            update_goals_by_pk(pk_columns: { id: $goal_id }, _set: { status: ${GOAL_STATUS_ENUM.COMPLETED}, finished_at: "now()" }) {
                status
            }
        }
    `

    try {
        const response = await client.request(mutation, { goal_id })

        return response.update_goals_by_pk
    } catch (e) {
        processError(e, 'updateGoalStatusToCompleted error')
        return
    }
}
