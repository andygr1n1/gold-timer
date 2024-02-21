import { ModuleWrapper } from '@/components/ModuleWrapper'
import { observer } from 'mobx-react-lite'
import { ProfileDetails } from './components/profile-details/ProfileDetails'
import { APP_ROUTES_ENUM } from '@/helpers/enums'

export const ProfileIndex: React.FC = observer(() => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.DASHBOARD}>
            <ProfileDetails />
        </ModuleWrapper>
    )
})
