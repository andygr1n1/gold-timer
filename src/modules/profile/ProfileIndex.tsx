import { ModuleWrapper } from '@/components/ModuleWrapper'
import { observer } from 'mobx-react-lite'
import { ProfileDetails } from './components/profile-details/ProfileDetails'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'

export const ProfileIndex: React.FC = observer(() => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop'])

    return (
        <ModuleWrapper hideTopBar={!!isDesktop} context={APP_ROUTES_ENUM.PROFILE}>
            <div className='flex h-full w-full items-center justify-center xl:h-[calc(100vh-50px)]'>
                <ProfileDetails />
            </div>
        </ModuleWrapper>
    )
})
