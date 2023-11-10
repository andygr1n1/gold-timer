import { IGoal$ } from '@/modules/goals/mst/types'
import { format } from 'date-fns'
import { observer } from 'mobx-react-lite'

export const GoalDeadline: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const {
        remainingTimeString,
        isExpired,
        expiredDaysCount,
        hasRitualPower: isRitualGoal,
        isCompleted,
        finished_at,
    } = goal

    let styleByGoalType = 'text-blue-600'

    if (isRitualGoal) styleByGoalType = 'text-emerald-700'

    if (isCompleted)
        return (
            <div className='flex items-center gap-2 py-4 font-bold  text-gray-600'>
                <span className='text-xs'>completed on</span>
                {finished_at && format(finished_at, 'dd.MM.yyyy')}
            </div>
        )

    return (
        <div className='flex items-center gap-2 py-4  '>
            {isExpired ? (
                <div className='flex items-center gap-2 font-bold  text-amber-600'>
                    <span className='text-xs'>{remainingTimeString}</span>
                    <span className='font-bold'>{expiredDaysCount}</span>
                    <span className='text-xs'>days ago</span>
                </div>
            ) : (
                <>
                    <span className='text-xs text-slate-500'>deadline in</span>
                    <span className={`font-bold  ${styleByGoalType}`}>{remainingTimeString}</span>
                </>
            )}
        </div>
    )
})
