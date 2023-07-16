import { gql } from 'graphql-request'
import { generateClient } from '../client'
import { processError } from '@/helpers/processError.helper'
import { ISprint$SnIn } from '@/mst/types'

interface ISprintsDays {
    id: string
    date: Date | null
    status: boolean | null
}

interface ISprintsGoals {
    id: string
    title: string
    status: boolean | null
}

export interface IInsertNewSprint {
    id: string
    title: string
    description: string | null
    duration: number
    img_path: string | null
    achievement: string | null
    started_at: Date
    sprints_days: { data: ISprintsDays[] }
    sprints_goals: { data: ISprintsGoals[] }
    owner_id: string
}

export const insertNewSprint = async (newSprint: IInsertNewSprint): Promise<ISprint$SnIn | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation insertNewSprint($newSprint: sprints_insert_input!) {
            insert_sprints_one(object: $newSprint) {
                img_path
                id
                duration
                description
                created_at
                achievement
                started_at
                title
                updated_at
                sprints_days {
                    id
                    status
                    date
                }
                sprints_goals {
                    id
                    status
                    title
                }
            }
        }
    `

    try {
        const response = await client.request(mutation, { newSprint })

        return response.insert_sprints_one
    } catch (e) {
        processError(e, 'insertNewSprint error')
        return
    }
}
