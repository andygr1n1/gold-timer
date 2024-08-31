import { type FormikHelpers } from 'formik'
import { type IUserRestoreSchema } from '../services/types'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES_ENUM } from '@/services/enums'
import { useMutation } from '@tanstack/react-query'
import { notify } from '@/helpers/processMessage'
import { server_restoreUser } from '../services/server_restoreUser'

export const useRestoreOnSubmit = () => {
    const navigate = useNavigate()

    const mutation = useMutation({
        mutationFn: ({ formData }: { formData: IUserRestoreSchema }) => server_restoreUser({ formData }),
    })

    const onSubmit = (values: IUserRestoreSchema, formikHelpers: FormikHelpers<IUserRestoreSchema>) => {
        mutation.mutate(
            { formData: values },
            {
                onError: (/* error */) => {
                    // processError(error.message)
                },
                onSuccess: () => {
                    formikHelpers.resetForm()
                    notify(`
                        A link has been sent to your email.
                        Please check your inbox and click on the link to continue the process.
                        Thank you!`)
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
