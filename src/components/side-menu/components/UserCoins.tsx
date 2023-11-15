import { observer } from 'mobx-react-lite'
import { useUserStore } from '@/StoreProvider'
import { RitualPower } from './ritual-power/RitualPower'
import coinSvg from '@/assets/coin.svg'

export const UserCoins: React.FC = observer(() => {
    const { coins } = useUserStore()
    return (
        <div className='mx-2 mb-5 flex items-start justify-start gap-2 '>
            <div className='pointer-events-none flex items-center justify-center gap-1  '>
                <img src={coinSvg} width={25} height={25} />
                <span className='font-kzen h-40px text-cText opacity-70 '>{coins}</span>
            </div>
            <RitualPower />
        </div>
    )
})
