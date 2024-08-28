import { Formik } from 'formik'
import { type IUserProfileSchema } from '../../services'
import { ProfileDetailsForm } from './components/ProfileDetailsForm'
import { useProfileDetailsFormInitialValues } from './hooks/useProfileDetailsFormInitialValues'
import { useProfileDetailsFormOnValidate } from './hooks/useProfileDetailsFormOnValidate'
import { useProfileDetailsFormOnSubmit } from './hooks/useProfileDetailsFormOnSubmit'
import { EditPassword } from './components/EditPassword'

export const ProfileDetails: React.FC = () => {
    const { onSubmit } = useProfileDetailsFormOnSubmit()
    const { validate } = useProfileDetailsFormOnValidate()
    const { initialValues } = useProfileDetailsFormInitialValues()

    return (
        <div className='relative'>
            <EditPassword />
            <Formik<IUserProfileSchema>
                enableReinitialize
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
            >
                <ProfileDetailsForm />
            </Formik>
        </div>
    )
}
