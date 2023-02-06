import { RdBadge } from '@/components-antd-redesign/antrd-badge/RdBadge'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const NotificationBell: React.FC = observer(() => {
    return (
        <RdBadge count={7}>
            <button
                title='notifications'
                className='flex cursor-pointer items-center bg-transparent p-0 text-navlink hover:text-navlink-active'
            >
                <Icon icon='mdi:bell' width={20} height={20} />
            </button>
        </RdBadge>
    )
})
