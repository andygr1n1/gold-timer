import { IGoal$ } from '@/modules/goals/mst/types'
import { format } from 'date-fns'
import { observer } from 'mobx-react-lite'

/**
 * @deprecated old code
 */
export const GoalDeadline: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const {
        remainingTimeString,
        isExpired,
        expiredDaysCount,
        hasRitualPower: isRitualGoal,
        isCompleted,
        finished_at,
    } = goal

    let styleByGoalType = 'text-green-600'

    if (isRitualGoal) styleByGoalType = 'text-indigo-900'

    if (isCompleted)
        return (
            <div className='flex items-center gap-2 py-4 font-bold  text-amber-600'>
                <span className='capitalize'>Completed on</span>
                {finished_at && format(finished_at, 'dd.MM.yyyy')}
            </div>
        )

    return (
        <div className='flex items-center gap-2 py-4  '>
            {isExpired ? (
                <div className='flex items-center gap-2 font-bold  text-red-700'>
                    <span className='capitalize'>{remainingTimeString}</span>
                    <span className='text-xl font-bold'>{expiredDaysCount}</span>
                    <span>days ago</span>
                </div>
            ) : (
                <>
                    <span className='capitalize text-slate-500'>deadline in</span>
                    <span className={`text-xl font-bold capitalize  ${styleByGoalType}`}>{remainingTimeString}</span>
                </>
            )}
        </div>
    )
})
