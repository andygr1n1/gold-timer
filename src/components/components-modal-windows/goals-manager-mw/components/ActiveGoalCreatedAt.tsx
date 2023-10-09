import { IGoal$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'

export const ActiveGoalCreatedAt: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { created_at, createdDaysAgo } = goal

    let createString = !!createdDaysAgo ? `${createdDaysAgo} ${createdDaysAgo === 1 ? 'day' : 'days'} ago` : 'today'

    return (
        <>
            {created_at && (
                <div className='flex items-center gap-2 font-extralight '>
                    <span>created </span>
                    {createString}
                </div>
            )}
        </>
    )
})
