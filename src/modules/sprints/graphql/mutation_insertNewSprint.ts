import { gql } from 'graphql-request'
import { generateClient } from '@/api/client'
import { processError } from '@/helpers/processMessage'
import { type IInsertNewSprint } from './helpers/interface'
import { type ISprint$SnIn } from '../mst/types'

export const mutation_insertNewSprint = async (newSprint: IInsertNewSprint): Promise<ISprint$SnIn | undefined> => {
    const client = await generateClient()
    const mutation = gql`
        mutation mutation_insertNewSprint($newSprint: sprints_insert_input!) {
            insert_sprints_one(object: $newSprint) {
                img_path
                id
                duration
                description
                created_at
                achievement
                started_at
                finished_at
                title
                updated_at
                parent_sprint_id
                owner_id
                sprint_days
                sprint_goals
            }
        }
    `

    try {
        const response: any = await client.request(mutation, { newSprint })
        return response.insert_sprints_one
    } catch (e) {
        processError(e, 'mutation_insertNewSprint error')
        return
    }
}
