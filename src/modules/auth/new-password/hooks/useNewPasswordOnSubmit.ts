import { type FormikHelpers } from 'formik'
import { type IUserNewPasswordSchema } from '../services/types'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { processError, notify } from '@/helpers/processMessage'
import { server_newPassword } from '../services/server_newPassword'
import { APP_ROUTES_ENUM } from '@/services/enums'

export const useNewPasswordOnSubmit = () => {
    const navigate = useNavigate()

    const mutation = useMutation({
        mutationFn: ({ formData }: { formData: IUserNewPasswordSchema }) => server_newPassword({ formData }),
    })

    const onSubmit = (values: IUserNewPasswordSchema, formikHelpers: FormikHelpers<IUserNewPasswordSchema>) => {
        if (!values.restoreCode) {
            processError(`We don't recognize you. May be your link is broken. Please restart the process. Thank you!`)
            formikHelpers.resetForm()
            formikHelpers.setSubmitting(false)
            return
        }

        mutation.mutate(
            { formData: values },
            {
                onError: (error) => {
                    processError(error.message)
                },
                onSuccess: () => {
                    formikHelpers.resetForm()
                    notify(`
                        Account was restored successfully. Thank you!`)
                    navigate(`/${APP_ROUTES_ENUM.LOGIN}`)
                },
                onSettled: () => {
                    formikHelpers.setSubmitting(false)
                },
            },
        )
    }

    return { onSubmit }
}
