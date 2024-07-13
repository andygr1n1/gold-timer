import { ModuleWrapper } from '@/components/ModuleWrapper'
import { ProfileDetails } from './components/profile-details/ProfileDetails'
import { APP_ROUTES_ENUM } from '@/services/enums'

const ProfileIndex = () => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.PROFILE}>
            <div className='flex flex-col gap-10 w-full max-w-[600px] mx-auto relative'>
                {/* avatar */}
                <ProfileDetails />
                {/* achievements - crate only through goal */}
            </div>
        </ModuleWrapper>
    )
}

export default ProfileIndex
