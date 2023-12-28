import { observer } from 'mobx-react-lite'
import { useUserStore } from '@/StoreProvider'
import { RitualPower } from './ritual-power/RitualPower'
import { Icon } from '@iconify/react'

export const UserCoins: React.FC = observer(() => {
    const { coins } = useUserStore()
    return (
        <div className=' flex items-start justify-start gap-2 '>
            <div className='pointer-events-none flex items-center justify-center gap-1  '>
                <Icon icon='material-symbols:award-star-outline' className='text-rose-500' width={24} height={24} />
                <span className='font-kzen h-40px text-cText opacity-70 '>{coins}</span>
            </div>
            <RitualPower />
        </div>
    )
})
