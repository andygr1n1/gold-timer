import { FormikHelpers } from 'formik'
import { ICreateLabelForm } from '../service/types'
import { useInsertNoteLabel } from '../service/useInsertNoteLabel'
import { useMs } from '@/hooks/useMs'

export const useLabelFormOnSubmit = () => {
    const { insertNoteLabel } = useInsertNoteLabel()
    const { msSuccess } = useMs()

    const onSubmit = (values: ICreateLabelForm, formikHelpers: FormikHelpers<ICreateLabelForm>) => {
        const { setSubmitting } = formikHelpers

        insertNoteLabel({
            values,

            onSettled: () => {
                setSubmitting(false)
            },

            onSuccess: () => {
                setSubmitting(false)
                msSuccess()
            },
        })
    }

    return { onSubmit }
}
