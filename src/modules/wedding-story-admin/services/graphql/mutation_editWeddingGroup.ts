import { graphql } from '@/api/tada'

export const mutationEditWeddingGroup = () => {
    return graphql(`
        mutation mutation_editWeddingGroup($groupId: uuid!, $name: String!) {
            update_wedding_groups_by_pk(pk_columns: { id: $groupId }, _set: { name: $name }) {
                id
            }
        }
    `)
}

export const mutationEditWeddingGuest = () => {
    return graphql(`
        mutation mutation_editWeddingGuest($guestId: uuid!, $table: Int) {
            update_wedding_guests_by_pk(pk_columns: { id: $guestId }, _set: { table: $table }) {
                id
            }
        }
    `)
}
