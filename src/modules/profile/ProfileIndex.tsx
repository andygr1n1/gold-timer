import { ModuleWrapper } from '@/components/ModuleWrapper'
import { ProfileDetails } from './components/profile-details/ProfileDetails'
import { APP_ROUTES_ENUM } from '@/services/enums'

const ProfileIndex = () => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.PROFILE}>
            <ProfileDetails />
        </ModuleWrapper>
    )
}

export default ProfileIndex
