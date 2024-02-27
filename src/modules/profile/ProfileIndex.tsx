import { ModuleWrapper } from '@/components/ModuleWrapper'
import { ProfileDetails } from './components/profile-details/ProfileDetails'
import { APP_ROUTES_ENUM } from '@/helpers/enums'

export const ProfileIndex = () => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.PROFILE}>
            <ProfileDetails />
        </ModuleWrapper>
    )
}
