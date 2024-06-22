import { RITUAL_TYPE_ENUM } from '@/services/enums'
import { FormLabel } from '@/components/form/FormLabel'
import { IGoal } from '@/modules/goals/service/types'
import { XSelect } from '@/components-x/x-select/XSelect'
import { XInput } from '@/components-x/x-input/XInput'
import { IconInfinity } from '@/assets/icons/IconInfinity'
import { DaysOfTheWeek } from '@/helpers/date.helpers'

export const GoalRitualIntervalInput: React.FC<{
    goal: IGoal
}> = ({ goal }) => {
    const { goal_ritual } = goal
    if (!goal_ritual) return null

    const { ritual_type, ritual_interval, ritual_power } = goal_ritual

    const isIntervalDayOfWeek = ritual_type === RITUAL_TYPE_ENUM.DAYS_OF_WEEK

    return (
        <>
            <span
                className='text-cText mb-8 mt-4 flex items-center justify-center gap-5 bg-transparent text-xl font-bold focus-visible:outline-none '
                tabIndex={0}
            >
                <IconInfinity width={24} height={24} className='text-teal-600' />
                <span className='capitalize text-teal-600'>{'Ritual'}</span>
            </span>
            <div>
                <FormLabel title='Ritual power' />
                <XInput readOnly={true} type='number' value={ritual_power} onChange={() => {}} />
            </div>
            <div>
                <FormLabel title='Ritual interval' />
                <div className='flex flex-col gap-2'>
                    <div className='relative flex items-center justify-start gap-2'>
                        <div className='font-extralight'>
                            {isIntervalDayOfWeek ? 'Day of week' : 'Interval between days'}
                        </div>
                    </div>
                    {isIntervalDayOfWeek ? (
                        <XSelect readOnly={true} value={ritual_interval} onChange={() => {}} options={DaysOfTheWeek} />
                    ) : (
                        <XInput readOnly={true} type='number' value={ritual_interval} onChange={() => {}} />
                    )}
                </div>
            </div>
        </>
    )
}
