import { XBadge } from '@/components-x/x-badge/XBadge'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const NotificationBell: React.FC = observer(() => {
    return (
        <XBadge count={0}>
            <button
                disabled
                title='notifications'
                className='flex cursor-pointer items-center bg-transparent p-0 text-navLink hover:text-navLink-active disabled:cursor-default disabled:text-gray-700'
            >
                <Icon icon='mdi:bell' width={20} height={20} />
            </button>
        </XBadge>
    )
})
