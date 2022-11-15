import { IInsertRitual } from '@/helpers/interfaces/new_goal.interface'
import { gql } from 'graphql-request'
import { generateClient } from '../client'

export const insertGoalsRituals = async (newRitual: IInsertRitual): Promise<string | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation InsertGoalsRituals($newRitual: [goals_rituals_insert_input!]!) {
            insert_goals_rituals(
                objects: $newRitual
                on_conflict: {
                    constraint: goals_rituals_pkey
                    update_columns: [ritual_power, ritual_interval, ritual_type]
                }
            ) {
                returning {
                    goal_id
                }
            }
        }
    `

    try {
        const response = await client.request(mutation, { newRitual: [newRitual] })

        return response.insert_goals_rituals.returning[0].goal_id
    } catch (e) {
        console.error('insertGoalsRituals error', e)
        alert(`InsertGoal error: ${e}`)
        return
    }
}
