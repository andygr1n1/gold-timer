import { type FormikHelpers } from 'formik'
import { type IUserProfileSchema } from '../../../services'
import { useProfile$ } from '../../../stores/useProfile.store'
import { useUpdateUserProfile } from '../../../services/update-profile-data/useUpdateUserProfile'

export const useProfileDetailsFormOnSubmit = () => {
    const { onCancel } = useProfile$()
    const { updateUserProfile } = useUpdateUserProfile()

    const onSubmit = (values: IUserProfileSchema, formikHelpers: FormikHelpers<IUserProfileSchema>) => {
        const { setSubmitting } = formikHelpers

        updateUserProfile({
            userProfile: values,
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
