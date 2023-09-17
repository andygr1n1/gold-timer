import { gql } from 'graphql-request'
import { generateClient } from '@/graphql/client'
import { processError } from '@/helpers/processError.helper'
import { IEditSprintReq } from './helpers/interface'
import { ISprint$SnIn } from '../mst/types'

export const updateSprint = async (options: {
    sprintId: string
    updatedSprint: IEditSprintReq
}): Promise<ISprint$SnIn | undefined> => {
    const client = generateClient()

    const { sprintId, updatedSprint } = options

    const mutation = gql`
        mutation insertNewSprint($sprintId: uuid!, $updatedSprint: sprints_set_input) {
            update_sprints_by_pk(pk_columns: { id: $sprintId }, _set: $updatedSprint) {
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
        const response = await client.request(mutation, {
            sprintId,
            updatedSprint,
        })

        return response.update_sprints_by_pk
    } catch (e) {
        processError(e, 'insertNewSprint error')
        return
    }
}
