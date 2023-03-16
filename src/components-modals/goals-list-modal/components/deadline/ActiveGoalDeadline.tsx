import { IGoal$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'

export const ActiveGoalDeadline: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { remainingTimeString } = goal

    return (
        <div className='flex items-center gap-2  '>
            <span className='text-sm text-slate-500'>
                {remainingTimeString ? (
                    'deadline in'
                ) : (
                    <span className='bg-emerald-600 px-1 font-semibold text-white'>finish line</span>
                )}
            </span>
            <span className={`text-xs font-semibold text-emerald-600`}>{remainingTimeString}</span>
        </div>
    )
})
