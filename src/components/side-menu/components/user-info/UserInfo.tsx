import { ProfileAvatar } from '../../../../modules/profile/components/profile-avatar/components/ProfileAvatar'
import { UserName } from './UserName'
import { NavLink } from 'react-router-dom'
import { APP_ROUTES_ENUM } from '@/services/enums'
import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { useFetchProfileInfo } from '@/modules/profile/services'

export const UserInfo: React.FC = () => {
    const { isLoading, data } = useFetchProfileInfo()
    return (
        <div className='min-h-[220px]'>
            {!isLoading && (
                <div className='animate-opacity-3 relative flex min-h-[220px] flex-col items-center justify-center gap-5'>
                    {data?.name && <UserName name={data.name} />}
                    <NavLink to={APP_ROUTES_ENUM.PROFILE} onClick={() => useSideMenu.is_open && useSideMenu.onChange()}>
                        <ProfileAvatar />
                    </NavLink>
                </div>
            )}
        </div>
    )
}
