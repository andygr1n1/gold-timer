import { STATUS_ENUM, PRIVACY_ENUM } from '@/helpers/enums'
import { IUpsertNewGoal } from '@/helpers/interfaces/new_goal.interface'
import { gql } from 'graphql-request'
import { generateClient } from '../client'

export interface IUpsertGoal {
    id: string
    title: string
    slogan: string
    description: string
    status: STATUS_ENUM
    privacy: PRIVACY_ENUM
}

export const upsertGoal = async (newGoal: IUpsertNewGoal): Promise<IUpsertGoal | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation upsertGoal($newGoal: goals_insert_input!) {
            insert_goals_one(
                object: $newGoal
                on_conflict: { constraint: goals_pkey, update_columns: [title, description, slogan, privacy, status] }
            ) {
                id
                title
                slogan
                description
                status
                privacy
            }
        }
    `

    try {
        const response = await client.request(mutation, { newGoal })

        return response.insert_goals_one
    } catch (e) {
        console.error('InsertGoal error', e)
        alert(`InsertGoal error::: ${e}`)
        return
    }
}
