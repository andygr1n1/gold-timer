import type { IInvitationEditorSchema } from '../types.ts'

export const useInvitationEditorFormInitialValues = () => {
    const initialValues: IInvitationEditorSchema = initialInvitation()

    return { initialValues }
}

const initialInvitation = (): IInvitationEditorSchema => ({
    name1: '',
    name2: '',
    groupName: '',
})
