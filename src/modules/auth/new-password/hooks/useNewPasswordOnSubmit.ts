import { FormikHelpers } from 'formik'
import { IUserNewPasswordSchema } from '../services/types'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES_ENUM } from '@/helpers'
import { useMutation } from '@tanstack/react-query'
import { processError, processSuccess } from '@/functions/processMessage'
import { server_newPassword } from '../services/server_newPassword'

export const useNewPasswordOnSubmit = () => {
    const navigate = useNavigate()

    const mutation = useMutation({
        mutationFn: ({ formData }: { formData: IUserNewPasswordSchema }) => server_newPassword({ formData }),
    })

    const onSubmit = (values: IUserNewPasswordSchema, formikHelpers: FormikHelpers<IUserNewPasswordSchema>) => {
        if (!values.restoreCode) {
            processError(
                `We don't recognize you. May be your link is broken. Please restart the process. Thank you!`,
            )
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
                    processSuccess(`
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
