import { useRootStore } from '@/modules/app/mst/StoreProvider'
import { observer } from 'mobx-react-lite'
import { IconLogout } from '@/assets/icons/IconLogout'
import { removeUserCookie } from '@/functions/universalCookie'

export const Logout: React.FC = observer(() => {
    const { clearStore } = useRootStore()

    const onLogout = () => {
        removeUserCookie()

        window.queryClient.clear()
        clearStore()
    }

    return (
        <button
            onClick={onLogout}
            title='logout'
            className='text-cText  m-0 flex cursor-pointer items-center bg-transparent p-0 opacity-70 hover:text-blue-500 hover:opacity-100 disabled:cursor-default disabled:text-gray-700'
        >
            <IconLogout width={25} height={25} />
        </button>
    )
})
