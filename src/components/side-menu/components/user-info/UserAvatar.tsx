import { APP_ROUTES_ENUM } from '@/lib/enums'
import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'

export const UserAvatarSideMenu: React.FC<{ avatar: string }> = observer(({ avatar }) => {
    return (
        <div className='relative flex h-32 w-32 items-center justify-center  rounded-full font-bold text-gray-500 md:h-40 md:w-40'>
            {avatar ? (
                <NavLink to={APP_ROUTES_ENUM.PROFILE} onClick={() => useSideMenu.is_open && useSideMenu.onChange()}>
                    <div className='relative h-32 w-32 rounded-full md:h-40 md:w-40'>
                        <img
                            title={'avatar'}
                            src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/avatars/${avatar}`}
                            className='absolute left-0 top-0 z-10 h-32 w-32 rounded-full md:h-40 md:w-40'
                        />
                        <div className='animate-ping-bg absolute left-0 top-0 !z-0 h-full w-full  rounded-full bg-blue-500/30 opacity-100 transition '></div>
                    </div>
                </NavLink>
            ) : null}
        </div>
    )
})
