import { type FormikHelpers } from 'formik'
import { server_loginUser } from '../services/server_loginUser'
import { type IUserLoginSchema } from '../services/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRoot$ } from '@/modules/app/mst/StoreProvider'
import { parseJwt } from '@/helpers/parseJwt'
import { setAccessIdInCookie, setSessionJWTInCookie } from '@/helpers/universalCookie'

export const useLoginOnSubmit = () => {
    const queryClient = useQueryClient()
    const { selectUser } = useRoot$()
    const mutation = useMutation({
        mutationFn: ({ formData }: { formData: IUserLoginSchema }) => server_loginUser({ formData }),
    })

    const onSubmit = (values: IUserLoginSchema, formikHelpers: FormikHelpers<IUserLoginSchema>) => {
        const { resetForm, setSubmitting } = formikHelpers

        mutation.mutate(
            { formData: values },
            {
                onError: (/* error */) => {
                    // processError(error.message)
                },
                onSuccess: (res) => {
                    resetForm()

                    const data = parseJwt(res?.accessJWT)
                    const sessionJWT = res?.sessionJWT

                    setSessionJWTInCookie(sessionJWT)
                    setAccessIdInCookie(res?.accessJWT)

                    selectUser({
                        queryClient,
                        user: { id: data?.id, role: data?.role },
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
