import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const Logout: React.FC = observer(() => {
    return (
        <button
            disabled
            title='logout'
            className='m-0 flex cursor-pointer items-center bg-transparent p-0 text-navLink hover:text-navLink-active disabled:cursor-default disabled:text-gray-700'
        >
            <Icon icon='ic:baseline-logout' width={20} height={20} />
        </button>
    )
})