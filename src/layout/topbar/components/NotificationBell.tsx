import { RdBadge } from '@/components-rd/rd-badge/RdBadge'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const NotificationBell: React.FC = observer(() => {
    return (
        <RdBadge count={0}>
            <button
                disabled
                title='notifications'
                className='flex cursor-pointer items-center bg-transparent p-0 text-navlink hover:text-navlink-active disabled:cursor-default disabled:text-gray-700'
            >
                <Icon icon='mdi:bell' width={20} height={20} />
            </button>
        </RdBadge>
    )
})
