import { observer } from 'mobx-react-lite'
import { IGoalSchema } from '@/modules/goals/service/types'
import { isCompleted } from '@/modules/goals/helpers/goalsGuards'
import {
    calculateIsExpired,
    calculateIsRitual,
    calculateTotalRemainingDays,
} from '@/modules/goals/helpers/optimizeActiveGoalsData'
import { IconExpired } from '@/assets/icons/IconExpired'
import { IconFocus } from '@/assets/icons/IconFocus'
import { IconInfinity } from '@/assets/icons/IconInfinity'
import { IconCompleted } from '@/assets/icons/IconCompleted'

export const GoalDetails: React.FC<{ goal: IGoalSchema }> = observer(({ goal }) => {
    return (
        <div className='animate-opacity-5 my-10 flex w-full items-center justify-center  gap-5 rounded-md'>
            <GoalDaysUntilDeadline goal={goal} />
            <GoalRitualCount goal={goal} />
            <ImageByGoalType goal={goal} />
        </div>
    )
})

const ImageByGoalType: React.FC<{ goal: IGoalSchema }> = observer(({ goal }) => {
    const isRitual = calculateIsRitual(goal)
    const isExpired = calculateIsExpired(goal)
    const _isCompleted = isCompleted(goal.status)

    let goalIcon = <IconFocus className='h-[60px] w-[60px] text-blue-600' />
    if (isExpired) {
        goalIcon = <IconExpired className='h-[60px] w-[60px] text-amber-600' />
    }
    if (isRitual) {
        goalIcon = <IconInfinity className='h-[60px] w-[60px] text-teal-700' />
    }

    if (_isCompleted) {
        goalIcon = <IconCompleted className='h-[60px] w-[60px] text-rose-700' />
    }

    return <div className='flex items-center justify-center gap-5'>{goalIcon}</div>
})

const GoalRitualCount: React.FC<{ goal: IGoalSchema }> = observer(({ goal }) => {
    const isRitual = calculateIsRitual(goal)

    if (!isRitual) return null
    const { goal_ritual } = goal

    return (
        <div className='flex flex-col items-center justify-center gap-2 '>
            <div className='pl-2 font-extralight'>Power</div>
            <div className='flex gap-5 text-3xl text-teal-600'>{goal_ritual?.ritual_power}</div>
        </div>
    )
})

const GoalDaysUntilDeadline: React.FC<{ goal: IGoalSchema }> = observer(({ goal }) => {
    const { status } = goal

    const _totalRemainingDays = calculateTotalRemainingDays(goal)

    if (isCompleted(status)) return null

    return (
        <div className='flex flex-col items-center justify-center gap-2 '>
            <div className='pl-2 font-extralight'>Deadline</div>
            <div className='flex gap-5 text-3xl text-blue-500'>
                {_totalRemainingDays ? `${_totalRemainingDays} d` : 'Today'}
            </div>
        </div>
    )
})
