import { IGoal$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'

export const ExpiredGoalDeadline: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { remainingTimeString, remainingTimeDaysCount } = goal

    const expiredDaysCount = Math.abs(remainingTimeDaysCount)

    return (
        <div className='flex items-center gap-2  '>
            <div className='flex items-end gap-2 font-neon text-sm'>
                <span className='text-sm text-slate-500'>{remainingTimeString}</span>
                <span className='font-semibold text-red-700'>{Math.abs(remainingTimeDaysCount)}</span>
                <span className='text-xs text-slate-500'>{expiredDaysCount === 1 ? 'day' : 'days'} ago</span>
            </div>
        </div>
    )
})
