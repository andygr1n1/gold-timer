import { gql } from 'graphql-request'
import { generateClient } from '../client'
import { processError } from '@/helpers/processError.helper'

export const favoriteGoalMutation = async (goal_id: string, is_favorite: boolean): Promise<boolean | undefined> => {
    const client = generateClient()

    const mutation = gql`
        mutation favoriteGoalMutation($goal_id: uuid!, $is_favorite: Boolean) {
            update_goals_by_pk(pk_columns: { id: $goal_id }, _set: { is_favorite: $is_favorite }) {
                is_favorite
            }
        }
    `

    try {
        const response = await client.request(mutation, { goal_id, is_favorite })

        return response.update_goals_by_pk.is_favorite
    } catch (e) {
        processError(e, 'favoriteGoalMutation error')
        return
    }
}
