import { GOAL_STATUS_ENUM } from '@/helpers/enums'
import { gql } from 'graphql-request'
import { generateClient } from '../../../graphql/client'
import { processError } from '@/functions/processMessage'

export const mutation_completeGoal = async (goal_id: string): Promise<GOAL_STATUS_ENUM | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation mutation_completeGoal($goal_id: uuid!) {
            update_goals_by_pk(pk_columns: { id: $goal_id }, _set: { status: ${GOAL_STATUS_ENUM.COMPLETED}, finished_at: "now()" }) {
                status
            }
        }
    `

    try {
        const response = await client.request(mutation, { goal_id })

        return response.update_goals_by_pk.status
    } catch (e) {
        processError(e, 'mutation_completeGoal error')
        return
    }
}
