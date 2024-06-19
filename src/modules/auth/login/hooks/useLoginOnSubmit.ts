import { FormikHelpers } from 'formik'
import { server_loginUser } from '../services/server_loginUser'
import { IUserLoginSchema } from '../services/types'
import { useMutation } from '@tanstack/react-query'
import { processError } from '@/functions/processMessage'
import { useUserStore } from '@/services/user-store/useUserStore.service'
import { parseJwt } from '@/helpers/parseJwt'

export const useLoginOnSubmit = () => {
    const { selectUser } = useUserStore()
    const mutation = useMutation({
        mutationFn: ({ formData }: { formData: IUserLoginSchema }) => server_loginUser({ formData }),
    })

    const onSubmit = (values: IUserLoginSchema, formikHelpers: FormikHelpers<IUserLoginSchema>) => {
        const { resetForm, setSubmitting } = formikHelpers

        mutation.mutate(
            { formData: values },
            {
                onError: (error) => {
                    processError(error.message)
                },
                onSuccess: (res) => {
                    resetForm()

                    const data = parseJwt(res?.accessId)

                    selectUser({
                        user: { userId: data?.id, role: data?.role },
                        rerender: false,
                    })
                },
                onSettled: () => {
                    setSubmitting(false)
                },
            },
        )
    }

    return { onSubmit }
}
