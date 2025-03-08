import type { IInvitationEditorSchema } from '../services/types.ts'
import type { IWeddingGroup } from '../services/types.ts'

export const useInvitationEditorFormInitialValues = (props?: { weddingGroup?: IWeddingGroup }) => {
    const initialValues: IInvitationEditorSchema = initialInvitation({ weddingGroup: props?.weddingGroup })

    return { initialValues }
}

const initialInvitation = ({ weddingGroup }: { weddingGroup?: IWeddingGroup }): IInvitationEditorSchema => ({
    groupName: weddingGroup?.name || '',
    name1: weddingGroup?.wedding_guests[0]?.first_name || '',
    name2: weddingGroup?.wedding_guests[1]?.first_name || '',
    table1: weddingGroup?.wedding_guests[0]?.table || undefined,
    table2: weddingGroup?.wedding_guests[1]?.table || undefined,
    solo: weddingGroup?.solo || false,
})
