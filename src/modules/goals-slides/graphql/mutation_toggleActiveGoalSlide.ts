import { gql } from 'graphql-request'
import { generateClient } from '../../../graphql/client'
import { processError } from '@/helpers/processMessage'

export const mutation_toggleActiveGoalSlide = async (id: string, active: boolean): Promise<boolean | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation mutation_toggleActiveGoalSlide($id: uuid!, $active: Boolean) {
            update_goals_slides_by_pk(pk_columns: { id: $id }, _set: { active: $active }) {
                active
            }
        }
    `

    try {
        const response: any = await client.request(mutation, { id, active })
        return response?.update_goals_slides_by_pk?.active
    } catch (e) {
        processError(e, 'mutation_toggleActiveGoalSlide error')
        return
    }
}
