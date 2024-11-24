import { gql } from 'graphql-request'
import { processError } from '@/helpers/processMessage'
import { generateClient } from '@/graphql/client'

export const mutation_toggleDeleteSprint = async (
    id: string,
    deleteSprint: boolean,
): Promise<Date | null | undefined> => {
    const client = await generateClient()
    const deleted_at = deleteSprint ? 'now()' : null

    const mutation = gql`
        mutation mutation_toggleDeleteSprint($id: uuid!, $deleted_at: timestamptz) {
            update_sprints(
                where: { _or: [{ id: { _eq: $id } }, { parent_sprint_id: { _eq: $id } }] }
                _set: { deleted_at: $deleted_at }
            ) {
                returning {
                    deleted_at
                }
            }
        }
    `

    try {
        const response: any = await client.request(mutation, { id, deleted_at })
        return response.update_sprints.returning[0]?.deleted_at
    } catch (e) {
        processError(e, 'mutation_toggleDeleteSprint error')
        return
    }
}
