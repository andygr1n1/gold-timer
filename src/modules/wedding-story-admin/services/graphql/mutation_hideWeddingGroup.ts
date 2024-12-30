import { graphql } from '@/api/tada'

export const mutationHideWeddingGroup = () => {
    return graphql(`
        mutation mutation_hideWeddingGroup($groupId: uuid!, $hide: Boolean!) {
            update_wedding_groups_by_pk(pk_columns: { id: $groupId }, _set: { hide: $hide }) {
                id
            }
        }
    `)
}
