import { gql } from 'graphql-request'
import { generateClient } from '@/graphql/client'
import { processError } from '@/helpers/processError.helper'
import { ISprintsDays } from './helpers/interface'

export const updateSprintDays = async (options: { id: string; sprintDays: ISprintsDays[] }) => {
    const client = generateClient()

    const { id, sprintDays } = options

    const mutation = gql`
        mutation insertNewSprint($id: uuid!, $sprintDays: jsonb) {
            update_sprints_by_pk(pk_columns: { id: $id }, _set: { sprint_days: $sprintDays }) {
                id
            }
        }
    `

    try {
        const response = await client.request(mutation, {
            id,
            sprintDays,
        })

        return response.update_sprints_by_pk
    } catch (e) {
        processError(e, 'updateSprintDays error')
        return
    }
}
