import { FormikHelpers } from 'formik'
import { server_loginUser } from '../services/server_loginUser'
import { IUserLoginSchema } from '../services/types'

export const useLoginOnSubmit = () => {
    const onSubmit = (values: IUserLoginSchema, formikHelpers: FormikHelpers<IUserLoginSchema>) => {
        const { resetForm, setSubmitting } = formikHelpers
        server_loginUser({
            formData: values,
            onSuccess: () => {
                resetForm()
            },
            onSettled: () => {
                setSubmitting(false)
            },
        })
    }

    return { onSubmit }
}
