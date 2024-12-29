import { generateClient } from '@/api/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/api/tada'
import type { IWeddingGroup } from '../types'

export const mutation_deleteWeddingGroup = async ({ values }: { values: IWeddingGroup }) => {
    try {
        const client = await generateClient()

        const groupMutation = graphql(`
            mutation mutation_deleteWeddingGroup($groupId: uuid!) {
                update_wedding_groups_by_pk(pk_columns: { id: $groupId }, _set: { deleted_at: "now()" }) {
                    id
                }
            }
        `)

        return await client.request(groupMutation, { groupId: values.id })
    } catch (e) {
        return await resolveError(e)
    }
}
