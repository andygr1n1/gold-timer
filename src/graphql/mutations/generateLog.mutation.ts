import { LOG_TYPE_ENUM } from '@/helpers/enums'
import { gql } from 'graphql-request'
import { generateClient } from '../client'

export const generateLog = async (
    goal_id: string,
    log_description: LOG_TYPE_ENUM,
): Promise<LOG_TYPE_ENUM | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation upsertGoal($goal_id: uuid!, $log_description: goal_logs_enum_enum) {
            insert_goals_logs_one(object: { goal_id: $goal_id, log_description: $log_description }) {
                log_description
            }
        }
    `

    try {
        const response = await client.request(mutation, { goal_id, log_description })

        return response.insert_goals_logs_one
    } catch (e) {
        console.error('InsertGoal error', e)
        alert(`InsertGoal error::: ${e}`)
        return
    }
}
