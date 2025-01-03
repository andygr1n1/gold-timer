import { type FormikHelpers } from 'formik'
import type { IInvitationEditorSchema } from '../services/types'
import { useInvitationEditorFormCreateInvitation } from './useInvitationEditorFormCreateInvitation'
import { useDispatch } from 'react-redux'
import { updateField } from '../services/weddingStoryEditorSlice'

export const useInvitationEditorFormOnSubmit = () => {
    const dispatch = useDispatch()
    const { createInvitation } = useInvitationEditorFormCreateInvitation()

    const onClose = () => {
        dispatch(updateField({ field: 'open', value: false }))
    }

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
