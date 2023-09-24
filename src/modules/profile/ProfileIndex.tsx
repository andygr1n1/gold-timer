import { ModuleWrapper } from '@/components/ModuleWrapper'
import { observer } from 'mobx-react-lite'
import { ProfileDetails } from './components/profile-details/ProfileDetails'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { Achievements } from './components/achievements/Achievements'

export const ProfileIndex: React.FC = observer(() => {
    return (
        <ModuleWrapper hideTopBar context={APP_ROUTES_ENUM.PROFILE}>
            <div className='flex flex-col gap-20 xl:h-[calc(100vh-40px)]  xl:flex-row'>
                <ProfileDetails />
                <Achievements />
            </div>
        </ModuleWrapper>
    )
})
