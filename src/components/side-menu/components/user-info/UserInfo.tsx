import { ProfileAvatar } from '../../../../modules/profile/components/profile-avatar/components/ProfileAvatar'
import { UserName } from './UserName'
import { useFetchAvatar } from '../../../../modules/profile/service/fetch-avatar/useFetchAvatar'
import { NavLink } from 'react-router-dom'
import { APP_ROUTES_ENUM } from '@/services/enums'
import { useSideMenu } from '@/hooks/useSideMenu.hook'

export const UserInfo: React.FC = () => {
    const { isLoading, name } = useFetchAvatar()

    return (
        <div className='min-h-[220px]'>
            {!isLoading && (
                <div className='animate-opacity-3 relative flex min-h-[220px] flex-col items-center justify-center gap-5'>
                    <UserName name={name} />
                    <NavLink to={APP_ROUTES_ENUM.PROFILE} onClick={() => useSideMenu.is_open && useSideMenu.onChange()}>
                        <ProfileAvatar />
                    </NavLink>
                </div>
            )}
        </div>
    )
}
