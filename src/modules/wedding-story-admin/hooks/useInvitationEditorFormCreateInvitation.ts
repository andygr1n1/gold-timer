import type { IInvitationEditorSchema } from '../types'
import { useInsertWeddingGroupMutation, useInsertWeddingGuestsMutation } from '../services/apiWeddingStorySlice'
import { generateBookingNumber } from '../helpers/generateBookingNumber'

export const useInvitationEditorFormCreateInvitation = () => {
    const [actionInsertGroup] = useInsertWeddingGroupMutation()
    const [actionInsertGuests] = useInsertWeddingGuestsMutation()

    const createInvitation = async ({
        values,
        onSuccess,
    }: {
        values: IInvitationEditorSchema
        onSuccess: () => void
    }) => {
        const group_id = crypto.randomUUID()
        const booking_number = generateBookingNumber()

        const object = {
            id: group_id,
            name: values.groupName,
            booking_number,
        }

        await actionInsertGroup({ object })

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

        await actionInsertGuests({ objects })
            .unwrap()
            .then(() => onSuccess())
    }

    return { createInvitation }
}
