import { Form } from 'formik'
import { ProfileBirthdayInput } from './ProfileBirthdayInput'
import { ProfileEmailInput } from './ProfileEmailInput'
import { ProfileNameInput } from './ProfileNameInput'
import { ProfilePhoneInput } from './ProfilePhoneInput'
import { IconInfiniteLoading } from '@/assets/icons'
import { useInitProfileDetailsForm } from '@/modules/profile/components/profile-details/hooks/useInitProfileDetailsForm'
import { EditProfile } from './EditProfile'
import { CancelButton } from './CancelButton'
import { SubmitButton } from './SubmitButton'

export const ProfileDetailsForm = () => {
    const { isLoading, viewMode } = useInitProfileDetailsForm()

    return (
        <Form>
            <div className='flex items-center justify-between my-1 '>
                <div className='flex gap-2'>
                    <EditProfile />
                </div>
                {!viewMode && (
                    <div className='flex gap-2'>
                        <CancelButton />
                        <SubmitButton />
                    </div>
                )}
            </div>
            <div className='flex flex-col gap-2 bg-global-2-bg p-5 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] pl-5'>
                {isLoading && (
                    <div className='w-full h-full z-[100] bg-global-bg-plasma left-0 flex items-center duration-300 justify-center top-0 fixed'>
                        <IconInfiniteLoading className='w-20 h-20 text-blue-500 duration-300' />
                    </div>
                )}
                <ProfileEmailInput />
                <ProfileNameInput />
                <ProfilePhoneInput />
                <ProfileBirthdayInput />
            </div>
        </Form>
    )
}
