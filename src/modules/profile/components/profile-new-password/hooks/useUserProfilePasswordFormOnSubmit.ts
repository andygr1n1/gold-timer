import { FormikHelpers } from 'formik'
import { IUserProfilePasswordSchema } from '../../../services'
import { useProfile$ } from '../../../stores/useProfile.store'
import { useUpdatePassword } from '@/modules/profile/services/update-password/useUpdatePassword'

export const useUserProfilePasswordFormOnSubmit = () => {
    const { onCancel } = useProfile$()
    const { updatePassword } = useUpdatePassword()

    const onSubmit = (values: IUserProfilePasswordSchema, formikHelpers: FormikHelpers<IUserProfilePasswordSchema>) => {
        const { setSubmitting } = formikHelpers

        updatePassword({
            values,
            onSuccess: () => {
                onCancel()
            },
            onSettled: () => {
                setSubmitting(false)
            },
        })
    }

    return { onSubmit }
}
