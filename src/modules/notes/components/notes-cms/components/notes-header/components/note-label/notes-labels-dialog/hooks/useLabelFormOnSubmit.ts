import { type FormikHelpers } from 'formik'
import { type ICreateLabelForm } from '../service/types'
import { useInsertNoteLabel } from '../service/useInsertNoteLabel'
import { notifySuccess } from '@/helpers/processMessage'
import { validation_noteLabelName } from '../components/label-name/service/validation_noteLabelName'

export const useLabelFormOnSubmit = () => {
    const { insertNoteLabel } = useInsertNoteLabel()

    const onSubmit = async (values: ICreateLabelForm, formikHelpers: FormikHelpers<ICreateLabelForm>) => {
        const { setSubmitting } = formikHelpers

        await validation_noteLabelName({ value: values.name }).then((res) => {
            if (res.length) {
                formikHelpers.setFieldValue('duplicateName', true)
            } else {
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
        })
    }

    return { onSubmit }
}
