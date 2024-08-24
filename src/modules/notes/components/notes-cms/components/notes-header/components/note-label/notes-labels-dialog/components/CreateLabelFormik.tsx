import { Formik } from 'formik'
import { ICreateLabelForm } from '../service/types'
import { useLabelFormOnValidate } from '../hooks/useLabelFormOnValidate'
import { useLabelFormOnSubmit } from '../hooks/useLabelFormOnSubmit'
import { CreateLabelForm } from './CreateLabelForm'
export const CreateLabelFormik = () => {
    const { validate } = useLabelFormOnValidate()
    const { onSubmit } = useLabelFormOnSubmit()

    return (
        <Formik<ICreateLabelForm>
            enableReinitialize
            initialValues={{ name: '', id: crypto.randomUUID(), duplicateName: false }}
            validate={validate}
            onSubmit={onSubmit}
        >
            <CreateLabelForm />
        </Formik>
    )
}
