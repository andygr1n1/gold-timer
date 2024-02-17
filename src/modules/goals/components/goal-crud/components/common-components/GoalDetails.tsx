import { observer } from 'mobx-react-lite'
import todayLogoIcon from '@/assets/today-goal-logo.svg'
import ritualLogoIcon from '@/assets/ritual-logo.svg'
import expiredLogoIcon from '@/assets/expired-goals-logo.svg'
import completedLogoIcon from '@/assets/checked.png'
import { IActiveGoalOptimized } from '@/modules/goals/service/types'
import { isCompleted } from '@/modules/goals/helpers/goalsGuards'

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
    let goalIcon = todayLogoIcon
    const className = 'w-[60px] h-[60px]'
    if (isExpired) {
        goalIcon = expiredLogoIcon
    }
    if (isRitual) {
        goalIcon = ritualLogoIcon
    }

    if (isCompleted(goal.status)) {
        goalIcon = completedLogoIcon
    }

    return (
        <div className='flex items-center justify-center gap-5'>
            {/* {is_favorite && <img src={favoriteIcon} width={55} height={55} />} */}
            <img src={goalIcon} className={className} />
        </div>
    )
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
