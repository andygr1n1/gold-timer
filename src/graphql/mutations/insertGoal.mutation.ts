import { IInsertNewGoal } from '@/helpers/interfaces/new_goal.interface'
import { IGoal$SnapshotIn } from '@/mst/types'
import { gql } from 'graphql-request'
import { generateClient } from '../client'

export const insertGoal = async (newGoal: IInsertNewGoal): Promise<IGoal$SnapshotIn | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation InsertGoal($newGoal: goals_insert_input!) {
            insert_goals_one(object: $newGoal) {
                id
                owner_id
                created_at
                description
                difficulty
                finished_at
                privacy
                round
                slogan
                status
                title
            }
        }
    `

    try {
        const response = await client.request(mutation, { newGoal })

        return response.insert_goals_one
    } catch (e) {
        console.error('InsertGoal error', e)
        return
    }
}
