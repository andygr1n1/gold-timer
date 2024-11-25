import { generateClient } from '@/graphql/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { graphql } from '@/graphql/tada'
import type { IWeddingGroup } from '../types'

export const mutation_hideWeddingGroup = async ({ values }: { values: IWeddingGroup }) => {
    try {
        const client = await generateClient()

        const groupMutation = graphql(`
            mutation mutation_hideWeddingGroup($groupId: uuid!, $hide: Boolean!) {
                update_wedding_groups_by_pk(pk_columns: { id: $groupId }, _set: { hide: $hide }) {
                    id
                }
            }
        `)

        return await client.request(groupMutation, { groupId: values.id, hide: !values.hide })
    } catch (e) {
        return await resolveError(e)
    }
}
