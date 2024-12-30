import { graphql } from '@/api/tada'

export const mutationDeleteWeddingGroup = () => {
    return graphql(`
        mutation mutation_deleteWeddingGroup($groupId: uuid!) {
            update_wedding_groups_by_pk(pk_columns: { id: $groupId }, _set: { deleted_at: "now()" }) {
                id
            }
        }
    `)
}
