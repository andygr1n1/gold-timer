import { FormikHelpers } from 'formik'
import { IUserProfilePasswordSchema } from '../../../services'
import { useProfile$ } from '../../../stores/useProfile.store'
import { useUpdatePassword } from '@/modules/profile/services/update-password/useUpdatePassword'
import { processSuccess } from '@/helpers/processMessage'

export const useUserProfilePasswordFormOnSubmit = () => {
    const { onCancel } = useProfile$()
    const { updatePassword } = useUpdatePassword()

    const onSubmit = (values: IUserProfilePasswordSchema, formikHelpers: FormikHelpers<IUserProfilePasswordSchema>) => {
        const { setSubmitting } = formikHelpers

        updatePassword({
            values,
            onSuccess: () => {
                onCancel()
                processSuccess('Password was successfully changed')
            },
            onSettled: () => {
                setSubmitting(false)
            },
        })
    }

    return { onSubmit }
}
