import { gql } from 'graphql-request'
import { processError } from '@/helpers/processMessage'
import { generateClient } from '@/graphql/client'

export const mutation_updateSprintDayStatus = async (id: string, status: boolean): Promise<boolean | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation mutation_updateSprintDayStatus($id: uuid!, $status: Boolean) {
            update_sprints_days_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {
                status
            }
        }
    `

    try {
        const response: any = await client.request(mutation, {
            id,
            status,
        })

        return response.update_sprints_days_by_pk.status
    } catch (e) {
        processError(e, 'mutation_updateSprintDayStatus error')
        return
    }
}
