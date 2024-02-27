import { processError } from '../../../functions/processMessage'
import { generateClient } from '@/graphql/client'
import { getOwnerId } from '@/functions/getUserId'
import { gql } from 'graphql-request'
import { ISprint$SnIn } from '../mst/types'
import { sprints } from 'gold-timer-genql/lib/generated'

export const query_fetchSprints = async (): Promise<ISprint$SnIn[] | undefined> => {
    const client = generateClient()
    const user_id = getOwnerId()

    const query = gql`
        query fetchSprints($user_id: uuid) {
            sprints(
                where: { owner_id: { _eq: $user_id }, cached: { _is_null: true }, sprint_days: { _is_null: false } }
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
                deleted_at
            }
        }
    `

    try {
        const response = await client.request<{ sprints: sprints[] }>(query, { user_id })

        return response.sprints.map((sprint: ISprint$SnIn) => ({ ...sprint, sprint_days: sprint.sprint_days || [] }))
    } catch (e) {
        processError(`fetchSprints: ${e}`)
        return
    }
}
