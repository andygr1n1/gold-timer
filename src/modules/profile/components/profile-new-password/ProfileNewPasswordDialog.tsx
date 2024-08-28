import { Suspense, lazy } from 'react'
import { XModal } from '@/components-x/x-modal/XModal'
import { useProfile$ } from '../../stores/useProfile.store'
import { Formik } from 'formik'
import { type IUserProfilePasswordSchema } from '../../services'
import { useUserProfilePasswordFormOnSubmit } from './hooks/useUserProfilePasswordFormOnSubmit'
import { useUserProfilePasswordFormOnValidate } from './hooks/useUserProfilePasswordFormOnValidate'
import { useUserProfilePasswordFormInitialValues } from './hooks/useUserProfilePasswordFormInitialValues'
const ProfileNewPasswordForm = lazy(() => import('./components/ProfileNewPasswordForm'))

const ProfileNewPasswordDialog: React.FC = () => {
    const { editPassword, onCancel } = useProfile$()
    const { onSubmit } = useUserProfilePasswordFormOnSubmit()
    const { validate } = useUserProfilePasswordFormOnValidate()
    const { initialValues } = useUserProfilePasswordFormInitialValues()

    return (
        <XModal title={'New password'} open={!!editPassword} onCancel={onCancel}>
            {!!editPassword ? (
                <div className='flex h-full w-full flex-auto flex-col gap-5'>
                    <Formik<IUserProfilePasswordSchema>
                        enableReinitialize
                        initialValues={initialValues}
                        validate={validate}
                        onSubmit={onSubmit}
                    >
                        <Suspense fallback={null}>
                            <ProfileNewPasswordForm />
                        </Suspense>
                    </Formik>
                </div>
            ) : null}
        </XModal>
    )
}

export default ProfileNewPasswordDialog
