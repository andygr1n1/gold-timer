import { gql } from 'graphql-request'
import { generateClient } from '../../client'
import { processError } from '@/helpers/processError.helper'
import { ISprint$SnIn } from '@/mst/types'
import { IEditSprintReq, ISprintsDays } from './helpers/interface'

export const updateSprint = async (options: {
    sprintId: string
    updatedSprint: IEditSprintReq
    updatedDays: ISprintsDays[]
}): Promise<ISprint$SnIn | undefined> => {
    const client = generateClient()

    const { sprintId, updatedSprint, updatedDays } = options

    const mutation = gql`
        mutation insertNewSprint(
            $sprintId: uuid!
            $updatedSprint: sprints_set_input
            $updatedDays: [sprints_days_insert_input!]!
        ) {
            insert_sprints_days(
                objects: $updatedDays
                on_conflict: { constraint: sprints_days_id_key, update_columns: date }
            ) {
                affected_rows
            }
            update_sprints_by_pk(pk_columns: { id: $sprintId }, _set: $updatedSprint) {
                img_path
                id
                duration
                description
                created_at
                achievement
                started_at
                title
                updated_at
                parent_sprint_id
                owner_id
                sprints_days {
                    id
                    status
                    date
                }
                sprint_goals
            }
        }
    `

    try {
        const response = await client.request(mutation, {
            sprintId,
            updatedSprint,
            updatedDays,
        })

        return response.update_sprints_by_pk
    } catch (e) {
        processError(e, 'insertNewSprint error')
        return
    }
}
