import { observer } from 'mobx-react-lite'
import { useUserStore } from '@/StoreProvider'
import { RitualPower } from './ritual-power/RitualPower'
import coinSvg from '@/assets/coin.svg'
import { XDivider } from '@/components-x/x-divider/XDivider'

export const UserCoins: React.FC = observer(() => {
    const { coins } = useUserStore()
    return (
        <div className='ml-2 flex flex-col items-start justify-start gap-5'>
            <XDivider className='w-[125px] bg-gray-700' />
            <div className='flex items-center justify-center gap-3  '>
                <img src={coinSvg} width={25} height={25} />
                <span className='font-droid h-40px text-cText opacity-70 '>{coins}</span>
            </div>
            <RitualPower />
        </div>
    )
})
