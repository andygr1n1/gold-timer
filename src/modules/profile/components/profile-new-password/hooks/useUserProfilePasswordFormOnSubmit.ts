import { type FormikHelpers } from 'formik'
import { type IUserProfilePasswordSchema } from '../../../services'
import { useProfile$ } from '../../../stores/useProfile.store'
import { useUpdatePassword } from '@/modules/profile/services/update-password/useUpdatePassword'
import { notify } from '@/helpers/processMessage'

export const useUserProfilePasswordFormOnSubmit = () => {
    const { onCancel } = useProfile$()
    const { updatePassword } = useUpdatePassword()

    const onSubmit = (values: IUserProfilePasswordSchema, formikHelpers: FormikHelpers<IUserProfilePasswordSchema>) => {
        const { setSubmitting } = formikHelpers

        updatePassword({
            values,
            onSuccess: () => {
                onCancel()
                notify('Password was successfully changed')
            },
            onSettled: () => {
                setSubmitting(false)
            },
        })
    }

    return { onSubmit }
}
