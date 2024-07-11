import { IconLogout } from '@/assets/icons/IconLogout'
import { useLogout } from './hooks/useLogout'

export const Logout: React.FC = () => {
    const { logout } = useLogout()

    return (
        <button
            type='button'
            onClick={logout}
            title='logout'
            className='text-cText  m-0 flex cursor-pointer items-center bg-transparent p-0 opacity-70 hover:text-blue-500 hover:opacity-100 disabled:cursor-default disabled:text-gray-700'
        >
            <IconLogout width={25} height={25} />
        </button>
    )
}
