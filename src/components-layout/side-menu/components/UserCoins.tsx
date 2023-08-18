import { observer } from 'mobx-react-lite'
import { useUserStore } from '@/StoreProvider'
import { RitualPower } from './ritual-power/RitualPower'
import coinSvg from '@/assets/coin.svg'

export const UserCoins: React.FC = observer(() => {
    const { coins } = useUserStore()
    return (
        <div className='my-5 flex max-w-[170px] flex-wrap items-center justify-center gap-2  '>
            <div className='my-5 flex items-center justify-center gap-2 '>
                <img src={coinSvg} width={25} height={25} />
                <span className='font-droid-bold h-40px text-xs'>{coins}</span>
            </div>
            <RitualPower />
        </div>
    )
})
