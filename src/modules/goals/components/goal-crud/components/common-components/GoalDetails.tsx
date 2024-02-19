import { observer } from 'mobx-react-lite'
import { IActiveGoalOptimized } from '@/modules/goals/service/types'
import { isCompleted } from '@/modules/goals/helpers/goalsGuards'
import { IconExpired, IconFocus, IconInfinity } from '@/assets/icons'

export const GoalDetails: React.FC<{ goal: IActiveGoalOptimized }> = observer(({ goal }) => {
    return (
        <div className='my-10 flex w-full items-center justify-center  gap-5 rounded-md'>
            <GoalDaysUntilDeadline goal={goal} />
            <GoalRitualCount goal={goal} />
            <ImageByGoalType goal={goal} />
        </div>
    )
})

const ImageByGoalType: React.FC<{ goal: IActiveGoalOptimized }> = observer(({ goal }) => {
    const { isExpired, isRitual } = goal
    let goalIcon = <IconFocus className='h-[60px] w-[60px] text-blue-600' />
    if (isExpired) {
        goalIcon = <IconExpired className='h-[60px] w-[60px] text-amber-600' />
    }
    if (isRitual) {
        goalIcon = <IconInfinity className='h-[60px] w-[60px] text-teal-700' />
    }

    return <div className='flex items-center justify-center gap-5'>{goalIcon}</div>
})

const GoalRitualCount: React.FC<{ goal: IActiveGoalOptimized }> = observer(({ goal }) => {
    if (!goal?.isRitual) return null
    const { goal_ritual } = goal

    return (
        <div className='flex flex-col items-center justify-center gap-2 '>
            <div className='pl-2 font-extralight'>Power</div>
            <div className='flex gap-5 text-3xl text-teal-600'>{goal_ritual?.ritual_power}</div>
        </div>
    )
})

const GoalDaysUntilDeadline: React.FC<{ goal: IActiveGoalOptimized }> = observer(({ goal }) => {
    const { totalRemainingDays, status } = goal

    if (isCompleted(status)) return null

    return (
        <div className='flex flex-col items-center justify-center gap-2 '>
            <div className='pl-2 font-extralight'>Deadline</div>
            <div className='flex gap-5 text-3xl text-blue-500'>
                {totalRemainingDays ? `${totalRemainingDays} d` : 'Today'}
            </div>
        </div>
    )
})
