import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { useUserStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'

export const UserAvatarSideMenu: React.FC = observer(() => {
    const { avatar, name } = useUserStore()
    return (
        <div className='relative flex items-center justify-center rounded-full font-bold text-gray-500'>
            {avatar ? (
                <NavLink to={APP_ROUTES_ENUM.PROFILE} onClick={() => useSideMenu.is_open && useSideMenu.onChange()}>
                    <img
                        title={name}
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/avatars/${avatar}`}
                        className='h-32 w-32 rounded-full md:h-40 md:w-40'
                    />
                </NavLink>
            ) : null}
        </div>
    )
})
