import { IInsertNewGoal } from '@/helpers/interfaces/newGoal.interface'
import { IGoal$SnapshotIn } from '@/mst/types'
import { gql } from 'graphql-request'
import { generateClient } from '../client'

export const insertGoalMutation = async (newGoal: IInsertNewGoal): Promise<IGoal$SnapshotIn | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation insertGoalMutation($newGoal: goals_insert_input!) {
            insert_goals_one(object: $newGoal) {
                id
                owner_id
                created_at
                description
                difficulty
                finished_at
                privacy
                slogan
                status
                title
                parent_goal_id
                is_favorite
            }
        }
    `

    try {
        const response = await client.request(mutation, { newGoal })

        return response.insert_goals_one
    } catch (e) {
        console.error('insertGoalMutation error', e)
        return
    }
}
