import { type FormikHelpers } from 'formik'
import type { IInvitationEditorSchema, IWeddingGroup } from '../types'
import { notifySuccess } from '@/helpers/processMessage'
import { useQueryClient } from '@tanstack/react-query'
import { useEditWeddingGroup } from './useEditWeddingGroup'

export const useEditWeddingGroupEditorFormOnSubmit = () => {
    const queryClient = useQueryClient()
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
                notifySuccess('Wedding group updated successfully')
                queryClient.invalidateQueries()
                editGroup(false)
            },
        })
    }

    return { onSubmit }
}
