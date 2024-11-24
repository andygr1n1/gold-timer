import { type FormikHelpers } from 'formik'
import type { IInvitationEditorSchema } from '../types'
import { useInvitationEditorFormCreateInvitation } from './useInvitationEditorFormCreateInvitation'
import { notifySuccess } from '@/helpers/processMessage'
import { useInvitationEditorDialog$ } from '../mst/provider'
import { useQueryClient } from '@tanstack/react-query'

export const useInvitationEditorFormOnSubmit = () => {
    const queryClient = useQueryClient()
    const { onClose } = useInvitationEditorDialog$()
    const { createInvitation } = useInvitationEditorFormCreateInvitation()

    const onSubmit = (values: IInvitationEditorSchema, formikHelpers: FormikHelpers<IInvitationEditorSchema>) => {
        const { setSubmitting } = formikHelpers
        createInvitation({
            values,
            onSuccess: () => {
                setSubmitting(false)
                notifySuccess('Invitation created successfully')
                onClose()
                queryClient.invalidateQueries()
            },
        })
    }

    return { onSubmit }
}
