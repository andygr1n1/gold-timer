import { gql } from 'graphql-request'
import { generateClient } from '../../client'
import { processError } from '@/helpers/processError.helper'
import { ISprint$SnIn } from '@/mst/types'
import { IEditSprintReq, ISprintsDays, ISprintsGoals } from './helpers/interface'

export const updateSprint = async (options: {
    sprintId: string
    updatedSprint: IEditSprintReq
    updatedDays: ISprintsDays[]
    updatedGoals: ISprintsGoals[]
    deletedGoalsIds: string[]
}): Promise<ISprint$SnIn | undefined> => {
    const client = generateClient()

    const { sprintId, updatedSprint, updatedDays, updatedGoals, deletedGoalsIds } = options

    const mutation = gql`
        mutation insertNewSprint(
            $sprintId: uuid!
            $updatedSprint: sprints_set_input
            $updatedDays: [sprints_days_insert_input!]!
            $updatedGoals: [sprints_goals_insert_input!]!
            $deletedGoalsIds: [uuid!]!
        ) {
            insert_sprints_days(
                objects: $updatedDays
                on_conflict: { constraint: sprints_days_id_key, update_columns: date }
            ) {
                affected_rows
            }
            insert_sprints_goals(
                objects: $updatedGoals
                on_conflict: { constraint: sprints_goals_id_key, update_columns: title }
            ) {
                affected_rows
            }
            delete_sprints_goals(where: { id: { _in: $deletedGoalsIds } }) {
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
                sprints_goals {
                    id
                    status
                    title
                }
            }
        }
    `

    try {
        const response = await client.request(mutation, {
            sprintId,
            updatedSprint,
            updatedDays,
            updatedGoals,
            deletedGoalsIds,
        })

        return response.update_sprints_by_pk
    } catch (e) {
        processError(e, 'insertNewSprint error')
        return
    }
}
