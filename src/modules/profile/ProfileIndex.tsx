import { ModuleWrapper } from '@/components-layout/ModuleWrapper'
import { observer } from 'mobx-react-lite'
import { ProfileDetails } from './components/profile-details/ProfileDetails'
import { ProfileAvatar } from './components/profile-avatar/ProfileAvatar'

export const ProfileIndex: React.FC = observer(() => {
    return (
        <ModuleWrapper title={'Profile'}>
            <div className='flex flex-col gap-5'>
                <ProfileAvatar />
                <ProfileDetails />
            </div>
        </ModuleWrapper>
    )
})
