import { type FormikHelpers } from 'formik'
import type { IInvitationEditorSchema, IWeddingGroup } from '../types'
// import { notifySuccess } from '@/helpers/processMessage'
import { useEditWeddingGroup } from './useEditWeddingGroup'

export const useEditWeddingGroupEditorFormOnSubmit = () => {
    const { editWeddingGroup } = useEditWeddingGroup()

    const onSubmit = (
        values: IInvitationEditorSchema,
        formikHelpers: FormikHelpers<IInvitationEditorSchema>,
        weddingGroup: IWeddingGroup,
        editGroup: (value?: boolean) => void,
    ) => {
        const { setSubmitting } = formikHelpers
        editWeddingGroup({
            values,
            weddingGroup,
            onSuccess: () => {
                setSubmitting(false)
                // notifySuccess('Wedding group updated successfully')
                editGroup(false)
            },
        })
    }

    return { onSubmit }
}
