import { useRootStore } from '@/StoreProvider'
import { removeUserCookie } from '@/functions/universalCookie.helper'
import { Icon } from '@iconify/react'
import { useAtom } from 'jotai'
import { observer } from 'mobx-react-lite'
import { loginAtom } from '@/modules/login/stores/login.store'
export const Logout: React.FC = observer(() => {
    const { clearStore } = useRootStore()
    const [, setLogin] = useAtom(loginAtom)

    const onLogout = () => {
        removeUserCookie()
        clearStore()
        setLogin((prev) => ({ ...prev, user_id: '' }))
    }

    return (
        <button
            onClick={onLogout}
            title='logout'
            className='text-cText  m-0 flex cursor-pointer items-center bg-transparent p-0 opacity-70 hover:text-blue-500 hover:opacity-100 disabled:cursor-default disabled:text-gray-700'
        >
            <Icon icon='ic:baseline-logout' width={25} height={25} />
        </button>
    )
})
