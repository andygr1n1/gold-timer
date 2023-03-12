import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const Logout: React.FC = observer(() => {
    return (
        <button
            title='logout'
            className='m-0 flex cursor-pointer items-center bg-transparent p-0 text-navlink hover:text-navlink-active'
        >
            <Icon icon='ic:baseline-logout' width={20} height={20} />
        </button>
    )
})
