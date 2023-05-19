import { useUserStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const Coins: React.FC = observer(() => {
    const { coins } = useUserStore()

    return (
        <div className='flex h-[41px] items-center gap-2'>
            <div className='text-navLink cursor-default font-mono text-base font-extrabold' title='coins'>
                {coins}
            </div>
            <Icon icon='ri:coins-fill' width={20} height={20} className='text-navLink ' />
        </div>
    )
})
