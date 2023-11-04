import { gql } from 'graphql-request'
import { generateClient } from '../../../graphql/client'
import { GOAL_TYPE_ENUM } from '@/helpers/enums'
import { processError } from '@/functions/processError.helper'

export const mutation_ritualizeGoal = async (
    goal_id: string,
    created_at: Date,
    finished_at: Date,
    ritual_power: number,
) => {
    const client = generateClient()

    const log_description = GOAL_TYPE_ENUM.RITUALIZED

    const mutation = gql`
        mutation mutation_ritualizeGoal(
            $goal_id: uuid!
            $created_at: timestamptz
            $finished_at: timestamptz
            $ritual_power: Int
            $log_description: goal_logs_enum_enum
        ) {
            update_goals_by_pk(
                pk_columns: { id: $goal_id }
                _set: { created_at: $created_at, finished_at: $finished_at }
            ) {
                finished_at
            }
            update_goals_rituals(where: { goal_id: { _eq: $goal_id } }, _set: { ritual_power: $ritual_power }) {
                affected_rows
            }
            insert_goals_logs_one(object: { goal_id: $goal_id, log_description: $log_description }) {
                log_id
            }
        }
    `

    try {
        const response = await client.request(mutation, {
            goal_id,
            created_at,
            finished_at,
            ritual_power,
            log_description,
        })

        return response.update_goals_by_pk
    } catch (e) {
        processError(e, 'mutation_ritualizeGoal error')
        return
    }
}
