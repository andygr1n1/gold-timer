import { useUserStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { Popover } from 'antd'
import { observer } from 'mobx-react-lite'

export const RitualPower: React.FC = observer(() => {
    const { total_ritual_power } = useUserStore()

    return (
        <Popover content={PopoverRitualPowerInfo}>
            <div className='flex cursor-pointer items-center gap-1'>
                <Icon icon='game-icons:magic-gate' width={18} height={18} className='text-indigo-700' />
                <div className='font-mono text-base font-extrabold text-indigo-700' title='ritual power'>
                    {total_ritual_power}
                </div>
            </div>
        </Popover>
    )
})

export const PopoverRitualPowerInfo = () => {
    const { total_ritual_power, number_of_rituals, most_powerful_ritual } = useUserStore()

    return (
        <div className='max-w-[300px]'>
            <div className='flex'>
                <span className='flex min-w-[90px]'>Total power: </span>
                <span className='font-semibold text-indigo-700'> {total_ritual_power}</span>
            </div>
            <div className='flex'>
                <span className='flex min-w-[90px]'>Total rituals: </span>
                <span className='font-semibold text-indigo-700'>{number_of_rituals}</span>
            </div>
            <div className='flex'>
                <span className='flex min-w-[90px]'>Super ritual:</span>
                <span>
                    <span className='text-indigo-300'> {most_powerful_ritual.goal_title}</span>
                    <span className='font-semibold text-indigo-700'>{` (${most_powerful_ritual.ritual_power}) `}</span>{' '}
                </span>
            </div>
        </div>
    )
}
