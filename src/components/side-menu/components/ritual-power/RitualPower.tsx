import { useUserStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Icon } from '@iconify/react'
export const RitualPower: React.FC = observer(() => {
    const { total_ritual_power } = useUserStore()

    return (
        <div className='pointer-events-none flex cursor-pointer items-center gap-1'>
            <Icon icon='game-icons:crystal-growth' width={24} height={24} className='text-teal-600' />
            <div className=' font-kzen text-cText opacity-70 '>{total_ritual_power}</div>
        </div>
    )
})
