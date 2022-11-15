import { STATUS_ENUM, PRIVACY_ENUM, RITUAL_TYPE_ENUM } from '@/helpers/enums'
import { IUpsertNewGoal } from '@/helpers/interfaces/new_goal.interface'
import { gql } from 'graphql-request'
import { generateClient } from '../client'

export interface IUpsertGoal {
    id: string
    title: string
    slogan: string
    description: string
    created_at: Date
    finished_at: Date
    status: STATUS_ENUM
    privacy: PRIVACY_ENUM
    goal_ritual: {
        goal_id: string
        ritual_id: string
        ritual_power: number
        ritual_interval: number
        ritual_type: RITUAL_TYPE_ENUM
    }
}

export const upsertGoal = async (newGoal: IUpsertNewGoal): Promise<IUpsertGoal | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation upsertGoal($newGoal: goals_insert_input!) {
            insert_goals_one(
                object: $newGoal
                on_conflict: {
                    constraint: goals_pkey
                    update_columns: [title, description, slogan, privacy, status, created_at, finished_at]
                }
            ) {
                id
                title
                slogan
                description
                status
                privacy
                created_at
                finished_at
                goal_ritual {
                    goal_id
                    ritual_id
                    ritual_power
                    ritual_interval
                    ritual_type
                }
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
