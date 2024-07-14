import { Form } from 'formik'
import { observer } from 'mobx-react-lite'
import { ProfileEmailInput } from '../../profile-details/components/ProfileEmailInput'
import { ProfilePasswordInput } from './ProfilePasswordInput'
import { ProfileNewPasswordInput } from './ProfileNewPasswordInput'
import { ProfileRepeatNewPasswordInput } from './ProfileRepeatNewPasswordInput'
import { StyledButton } from '@/components/buttons/StyledButton'

const ProfileNewPasswordForm: React.FC = observer(() => {
    return (
        <Form className='flex flex-col gap-5'>
            {/* accessibility */}
            <input type='text' style={{ display: 'none' }} autoComplete='off' name='accessibility' />
            <ProfileEmailInput />
            <ProfilePasswordInput />
            <ProfileNewPasswordInput />
            <ProfileRepeatNewPasswordInput />
            <div className='flex justify-end w-full mt-5'>
                <StyledButton type='submit'>Save</StyledButton>
            </div>
        </Form>
    )
})

export default ProfileNewPasswordForm
