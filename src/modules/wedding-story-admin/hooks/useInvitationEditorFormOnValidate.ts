import type { IInvitationEditorSchema } from '../services/types'

export const useInvitationEditorFormOnValidate = () => {
    const validate = (values: IInvitationEditorSchema) => {
        const errors: Partial<Record<keyof IInvitationEditorSchema, string>> = {}

        if (!values.groupName) {
            errors.groupName = 'Group name is required'
        }

        if (!values.name1) {
            errors.name1 = 'Guest name is required'
        }

        return errors
    }

    return { validate }
}
