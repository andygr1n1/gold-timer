import { FormikHelpers } from 'formik'
import { ICreateLabelForm } from '../service/types'
import { useInsertNoteLabel } from '../service/useInsertNoteLabel'

export const useLabelFormOnSubmit = () => {
    const { insertNoteLabel } = useInsertNoteLabel()

    const onSubmit = (values: ICreateLabelForm, formikHelpers: FormikHelpers<ICreateLabelForm>) => {
        console.log('submit', values)
        const { setSubmitting } = formikHelpers

        insertNoteLabel({
            values,

            onSettled: () => {
                setSubmitting(false)
            },

            onSuccess: () => {
                setSubmitting(false)
            },
        })
    }

    return { onSubmit }
}
