import { ModuleWrapper } from '@/components/ModuleWrapper'
import { observer } from 'mobx-react-lite'
import { ProfileDetails } from './components/profile-details/ProfileDetails'
import { ProfileAvatar } from './components/profile-avatar/ProfileAvatar'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { Logout } from './components/Logout'
import { ThemeSwitcher } from './components/ThemeSwitcher'

export const ProfileIndex: React.FC = observer(() => {
    return (
        <ModuleWrapper
            context={APP_ROUTES_ENUM.PROFILE}
            topBarNodes={
                <>
                    <Logout />
                    <ThemeSwitcher />
                </>
            }
        >
            <div className='flex flex-col gap-5'>
                <ProfileAvatar />
                <ProfileDetails />
            </div>
        </ModuleWrapper>
    )
})
