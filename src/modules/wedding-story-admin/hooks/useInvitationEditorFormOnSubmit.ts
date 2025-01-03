import { type FormikHelpers } from 'formik'
import type { IInvitationEditorSchema } from '../services/types'
import { useInvitationEditorFormCreateInvitation } from './useInvitationEditorFormCreateInvitation'
// import { notifySuccess } from '@/helpers/processMessage'
import { useInvitationEditorDialog$ } from '../mst/invitationEditorDialog.provider'

export const useInvitationEditorFormOnSubmit = () => {
    const { onClose } = useInvitationEditorDialog$()
    const { createInvitation } = useInvitationEditorFormCreateInvitation()

    const onSubmit = (values: IInvitationEditorSchema, formikHelpers: FormikHelpers<IInvitationEditorSchema>) => {
        const { setSubmitting } = formikHelpers
        createInvitation({
            values,
            onSuccess: () => {
                setSubmitting(false)
                // notifySuccess('Invitation created successfully')
                onClose()
            },
        })
    }

    return { onSubmit }
}
