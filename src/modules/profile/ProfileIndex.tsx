import { ModuleWrapper } from '@/components/ModuleWrapper'
import { ProfileDetails } from './components/profile-details/ProfileDetails'
import { ProfileAvatarIndex } from './components/profile-avatar/ProfileAvatarIndex'

const ProfileIndex = () => {
    return (
        <ModuleWrapper>
            <div className='flex flex-col gap-10 w-full max-w-[600px] mx-auto relative'>
                <ProfileAvatarIndex />
                <ProfileDetails />
                {/* achievements - crate only through goal */}
            </div>
        </ModuleWrapper>
    )
}

export default ProfileIndex
