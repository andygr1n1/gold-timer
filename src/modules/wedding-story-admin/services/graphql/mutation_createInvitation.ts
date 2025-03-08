import { graphql } from '@/api/tada'

export const mutationInsertWeddingGroup = () => {
    return graphql(`
        mutation mutation_addWeddingGroup($object: wedding_groups_insert_input!) {
            insert_wedding_groups_one(object: $object) {
                id
                name
                booking_number
                solo
            }
        }
    `)
}

export const mutationInsertWeddingGuests = () => {
    return graphql(`
        mutation mutation_addWeddingGuests($objects: [wedding_guests_insert_input!]!) {
            insert_wedding_guests(objects: $objects) {
                returning {
                    group_id
                    first_name
                }
            }
        }
    `)
}
