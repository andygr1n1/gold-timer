import { useUserStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import ritualPowerLogo from '@/assets/ritual-logo.svg'
export const RitualPower: React.FC = observer(() => {
    const { total_ritual_power } = useUserStore()

    return (
        <div className='pointer-events-none flex cursor-pointer items-center gap-1'>
            {/* <Icon icon='game-icons:magic-gate' width={18} height={18} className='text-indigo-700' /> */}
            <img src={ritualPowerLogo} width={25} height={25} />
            <div className=' font-kzen text-cText opacity-70 '>{total_ritual_power}</div>
        </div>
    )
})
