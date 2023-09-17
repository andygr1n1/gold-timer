import { processError } from '../../../helpers/processError.helper'
import { generateClient } from '@/graphql/client'
import { getUserId } from '@/helpers/getUserId'
import { gql } from 'graphql-request'
import { ISprint$SnIn } from '../mst/types'

export const fetchSprints = async (): Promise<ISprint$SnIn[] | undefined> => {
    const client = generateClient()
    const user_id = getUserId()

    const query = gql`
        query fetchSprints($user_id: uuid) {
            sprints(
                where: { owner_id: { _eq: $user_id }, deleted_at: { _is_null: true }, sprint_days: { _is_null: false } }
                order_by: { started_at: desc }
            ) {
                achievement
                title
                started_at
                finished_at
                updated_at
                owner_id
                img_path
                id
                duration
                description
                created_at
                parent_sprint_id
                owner_id
                created_at
                sprint_days
                sprint_goals
            }
        }
    `

    try {
        const response = await client.request(query, { user_id })

        return response.sprints.map((sprint: ISprint$SnIn) => ({ ...sprint, sprint_days: sprint.sprint_days || [] }))
    } catch (e) {
        processError(`fetchSprints: ${e}`)
        return
    }
}
