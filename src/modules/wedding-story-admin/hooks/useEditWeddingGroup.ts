import type { IInvitationEditorSchema, IWeddingGroup } from '../types'
import { useEditWeddingGroupMutation, useEditWeddingGuestMutation } from '../services/apiWeddingStorySlice'

export const useEditWeddingGroup = () => {
    const [actionEditWeddingGroup] = useEditWeddingGroupMutation()
    const [actionEditWeddingGuest] = useEditWeddingGuestMutation()

    const editWeddingGroup = async ({
        values,
        weddingGroup,
        onSuccess,
    }: {
        values: IInvitationEditorSchema
        weddingGroup: IWeddingGroup
        onSuccess: () => void
    }) => {
        const guest1Id = weddingGroup.wedding_guests[0]?.id
        const guest2Id = weddingGroup.wedding_guests[1]?.id

        guest1Id &&
            (await actionEditWeddingGuest({
                guestId: guest1Id,
                table: values.table1 || null,
            }))

        guest2Id &&
            (await actionEditWeddingGuest({
                guestId: guest2Id,
                table: values.table2 || null,
            }))

        await actionEditWeddingGroup({ groupId: weddingGroup.id, name: values.groupName })
            .unwrap()
            .then(() => {
                onSuccess()
            })
    }

    return { editWeddingGroup }
}
