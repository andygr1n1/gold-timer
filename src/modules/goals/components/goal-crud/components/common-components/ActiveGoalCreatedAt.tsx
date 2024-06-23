import { calculateCreatedDaysAgo } from '@/modules/goals/helpers/optimizeActiveGoalsData'
import { IGoalSchema } from '@/modules/goals/service/types'
import { observer } from 'mobx-react-lite'

export const ActiveGoalCreatedAt: React.FC<{ goal: IGoalSchema }> = observer(({ goal }) => {
    const { created_at } = goal
    const createdDaysAgo = calculateCreatedDaysAgo(goal)

    const createString = !!createdDaysAgo ? `${createdDaysAgo} ${createdDaysAgo === 1 ? 'day' : 'days'} ago` : 'today'

    return (
        <>
            {created_at && (
                <div className='flex items-center gap-2 font-extralight  opacity-70 '>
                    {/* <span>created </span> */}
                    {createString}
                </div>
            )}
        </>
    )
})
