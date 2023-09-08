import { useUserStore } from '@/StoreProvider'
import { Popover } from 'antd'
import { observer } from 'mobx-react-lite'
import ritualPowerLogo from '@/assets/ritual-logo.svg'
export const RitualPower: React.FC = observer(() => {
    const { total_ritual_power } = useUserStore()

    return (
        <Popover content={PopoverRitualPowerInfo} placement='bottomRight'>
            <div className='flex cursor-pointer items-center gap-3'>
                {/* <Icon icon='game-icons:magic-gate' width={18} height={18} className='text-indigo-700' /> */}
                <img src={ritualPowerLogo} width={25} height={25} />
                <div className=' font-droid text-cText opacity-70 '>{total_ritual_power}</div>
            </div>
        </Popover>
    )
})

export const PopoverRitualPowerInfo = () => {
    const { total_ritual_power, number_of_rituals, most_powerful_ritual } = useUserStore()

    return (
        <div className='max-w-[170px]'>
            <div className='flex'>
                <span className='flex min-w-[90px]'>Power: </span>
                <span className='font-semibold text-indigo-700'> {total_ritual_power}</span>
            </div>
            <div className='flex'>
                <span className='flex min-w-[90px]'>Rituals: </span>
                <span className='font-semibold text-indigo-700'>{number_of_rituals}</span>
            </div>
            <div className='flex'>
                <span className='flex min-w-[90px]'>Powerful:</span>
                <span>
                    <span className='text-indigo-300'> {most_powerful_ritual.goal_title}</span>
                    <span className='font-semibold text-indigo-700'>{` (${most_powerful_ritual.ritual_power}) `}</span>{' '}
                </span>
            </div>
        </div>
    )
}
