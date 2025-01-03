import { gql } from 'graphql-request'
import { processError } from '@/helpers/processMessage'
import { generateClient } from '@/api/client'

export const mutation_cachedSprint = async (id: string) => {
    const client = await generateClient()

    const mutation = gql`
        mutation mutation_cachedSprint($id: uuid!) {
            update_sprints_by_pk(pk_columns: { id: $id }, _set: { cached: true }) {
                id
            }
        }
    `

    try {
        const response: any = await client.request(mutation, { id })
        return response.update_sprints_by_pk
    } catch (e) {
        processError(e, 'mutation_cachedSprint error')
        return
    }
}
