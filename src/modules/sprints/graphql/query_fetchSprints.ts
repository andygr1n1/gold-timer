import { generateClient } from '@/api/client'
import { graphql } from '@/api/tada'
import { resolveError } from '@/helpers/tryCatchRequest'

export const query_fetchSprints = async () => {
    const client = await generateClient()

    const query = graphql(`
        query fetchSprints {
            sprints(
                where: { cached: { _is_null: true }, sprint_days: { _is_null: false } }
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
    `)

    try {
        return await client.request(query)
    } catch (e) {
        return await resolveError(e)
    }
}
