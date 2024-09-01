import { type FormikHelpers } from 'formik'
import { type ICreateLabelForm } from '../service/types'
import { useInsertNoteLabel } from '../service/useInsertNoteLabel'
import { notifySuccess } from '@/helpers/processMessage'

export const useLabelFormOnSubmit = () => {
    const { insertNoteLabel } = useInsertNoteLabel()

    const onSubmit = (values: ICreateLabelForm, formikHelpers: FormikHelpers<ICreateLabelForm>) => {
        const { setSubmitting } = formikHelpers

        insertNoteLabel({
            values,

            onSettled: () => {
                setSubmitting(false)
            },

            onSuccess: () => {
                setSubmitting(false)
                notifySuccess('Label saved')
            },
        })
    }

    return { onSubmit }
}
