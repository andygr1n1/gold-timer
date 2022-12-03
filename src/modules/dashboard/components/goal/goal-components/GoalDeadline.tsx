import { IGoal$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'

export const GoalDeadline: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { remainingTimeString, isExpired, isFrozen, remainingTimeDaysCount, isRitualGoal, isCompleted } = goal

    let styleByGoalType = 'text-green-600'

    if (isRitualGoal) styleByGoalType = 'text-indigo-900'

    if (isCompleted)
        return (
            <div className='flex items-center gap-2 py-4 font-bold  text-amber-600'>
                <span className='capitalize'>Completed</span>
                {remainingTimeDaysCount ? (
                    <>
                        <span className='text-xl font-bold'>{Math.abs(remainingTimeDaysCount)}</span>
                        <span>{Math.abs(remainingTimeDaysCount) === 1 ? 'day' : 'days'} ago</span>
                    </>
                ) : (
                    <span>today</span>
                )}
            </div>
        )

    return (
        <div className='flex items-center gap-2 py-4  '>
            {isFrozen ? null : isExpired ? (
                <div className='flex items-center gap-2 font-bold  text-red-700'>
                    <span className='capitalize'>{remainingTimeString}</span>
                    <span className='text-xl font-bold'>{Math.abs(remainingTimeDaysCount)}</span>
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
