import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { useSideMenu } from '@/hooks/useSideMenu.hook'
import { useUserStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'

export const UserAvatarSideMenu: React.FC = observer(() => {
    const { avatar, name } = useUserStore()
    return (
        <div
            className={`
                    relative my-10 flex h-[100px] min-h-[100px] w-[100px] items-center justify-center rounded-full
                    font-bold text-gray-500 ${!avatar ? 'bg-gray-300' : ''}`}
        >
            {avatar ? (
                <NavLink to={APP_ROUTES_ENUM.PROFILE} onClick={() => useSideMenu.is_open && useSideMenu.onChange()}>
                    <img
                        title={name}
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/avatars/${avatar}`}
                        width={100}
                        height={100}
                        className='rounded-full'
                    />
                </NavLink>
            ) : (
                <Icon icon={'material-symbols:person'} className='text-[#151c2c]' width={30} height={30} />
            )}
        </div>
    )
})
