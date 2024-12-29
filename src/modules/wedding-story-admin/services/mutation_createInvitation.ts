import { generateClient } from '@/api/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import type { IInvitationEditorSchema } from '../types'
import { graphql } from '@/api/tada'
import { generateBookingNumber } from '../helpers/generateBookingNumber'

export const mutation_createInvitation = async ({ values }: { values: IInvitationEditorSchema }) => {
    try {
        const client = await generateClient()

        const group_id = crypto.randomUUID()
        const booking_number = generateBookingNumber()

        const group = {
            id: group_id,
            name: values.groupName,
            booking_number,
        }

        const groupMutation = graphql(`
            mutation mutation_addWeddingGroup($group: wedding_groups_insert_input!) {
                insert_wedding_groups_one(object: $group) {
                    id
                    name
                    booking_number
                }
            }
        `)

        await client.request(groupMutation, { group })

        const objects = [
            {
                group_id,
                first_name: values.name1,
                last_name: values.surname1,
                primary: true,
            },
        ]

        if (values.name2) {
            objects.push({
                group_id,
                first_name: values.name2,
                last_name: values.surname2,
                primary: false,
            })
        }

        const guestMutation = graphql(`
            mutation mutation_addWeddingGuests($objects: [wedding_guests_insert_input!]!) {
                insert_wedding_guests(objects: $objects) {
                    returning {
                        group_id
                        first_name
                    }
                }
            }
        `)

        const baseResponse = await client
            .request(guestMutation, { objects })
            .then((data) => data?.insert_wedding_guests?.returning)

        return baseResponse
    } catch (e) {
        return await resolveError(e)
    }
}
