import { IGoal$ } from '@/modules/goals/mst/types'
import { observer } from 'mobx-react-lite'

export const GoalCreatedAt: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { created_at, createdDaysAgo, createdInFuture } = goal

    let createString = !!createdDaysAgo ? `${createdDaysAgo} ${createdDaysAgo === 1 ? 'day' : 'days'} ago` : 'today'

    if (createdInFuture) {
        createString = 'in future'
    }

    return (
        <div>
            {created_at && (
                <div className='font-kzen flex items-center gap-2 text-xs text-slate-500'>
                    <span>created </span>
                    {/* <span>{format(created_at, 'MM.dd.yyyy')}</span> */}
                    {/* <span>{format(created_at, 'HH:mm')}</span> */}

                    {createString}
                </div>
            )}
        </div>
    )
})
