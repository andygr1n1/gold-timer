import { GOAL_STATUS_ENUM } from '@/helpers/enums'
import { gql } from 'graphql-request'
import { generateClient } from '../client'
import { processError } from '@/helpers/processError.helper'

export const failGoalMutation = async (goal_id: string): Promise<GOAL_STATUS_ENUM | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation failGoalMutation($goal_id: uuid!) {
            update_goals_by_pk(pk_columns: { id: $goal_id }, _set: { status: failed }) {
                status
            }
        }
    `

    try {
        const response = await client.request(mutation, { goal_id })

        return response.update_goals_by_pk.status
    } catch (e) {
        processError(e, 'failGoalMutation error')
        return
    }
}
