import { type FormikHelpers } from 'formik'
import { server_registerUser } from '../services/server_registerUser'
import { type IUserRegisterSchema } from '../services/types'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { APP_ROUTES_ENUM } from '@/services/enums'

export const useRegisterOnSubmit = () => {
    const navigate = useNavigate()

    const mutation = useMutation({
        mutationFn: ({ formData }: { formData: IUserRegisterSchema }) => server_registerUser({ formData }),
    })

    const onSubmit = (values: IUserRegisterSchema, formikHelpers: FormikHelpers<IUserRegisterSchema>) => {
        mutation.mutate(
            { formData: values },
            {
                onError: (/* error */) => {
                    // processError(error.message)
                },
                onSuccess: () => {
                    formikHelpers.resetForm()
                    navigate(`/${APP_ROUTES_ENUM.ACTIVATE_PENDING_REGISTERED_USER}?email=${values.email}`)
                },
                onSettled: () => {
                    formikHelpers.setSubmitting(false)
                },
            },
        )
    }

    return { onSubmit }
}
