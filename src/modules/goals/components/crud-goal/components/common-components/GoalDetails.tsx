import { observer } from 'mobx-react-lite'
import todayLogoIcon from '@/assets/today-goal-logo.svg'
import favoriteIcon from '@/assets/heart-favorite.svg'
import ritualLogoIcon from '@/assets/ritual-logo.svg'
import expiredLogoIcon from '@/assets/expired-goals-logo.svg'
import { Icon } from '@iconify/react'
import { IGoal$ } from '../../../../mst/types'

export const GoalDetails: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    return (
        <div className='flex w-full items-center justify-center  gap-5 rounded-md'>
            <GoalDeleted goal={goal} />
            <ImageByGoalType goal={goal} />
            <GoalRitualCount goal={goal} />
            <GoalDaysUntilDeadline goal={goal} />
        </div>
    )
})

const GoalDeleted: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    return goal.deleted_at ? (
        <Icon icon='tdesign:delete-time' className='mb-1 min-w-[55px] text-[#9c0b1c]' width={55} height={55} />
    ) : null
})

const ImageByGoalType: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { is_favorite, isExpired, hasRitualPower: isRitualGoal } = goal
    let goalIcon = todayLogoIcon
    let className = 'pb-1 w-[70px] h-[70px]'
    if (isExpired) {
        goalIcon = expiredLogoIcon
        className = 'w-[60px] h-[60px]'
    }
    if (isRitualGoal) {
        goalIcon = ritualLogoIcon
        className = 'w-[60px] h-[60px]'
    }
    return (
        <div className='flex items-center justify-center gap-5'>
            {is_favorite && <img src={favoriteIcon} width={60} height={60} />}
            <img src={goalIcon} className={className} />
        </div>
    )
})

const GoalRitualCount: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    if (!goal?.hasRitualPower) return null
    const { goal_ritual } = goal

    return (
        <div className='flex flex-col items-center justify-center gap-2 '>
            <div className='pl-2 font-extralight'>Power</div>
            <div className='flex gap-5 text-3xl text-green-500'>{goal_ritual?.ritual_power}</div>
        </div>
    )
})

const GoalDaysUntilDeadline: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { totalRemainingDays } = goal

    return (
        <div className='flex flex-col items-center justify-center gap-2 '>
            <div className='pl-2 font-extralight'>Deadline</div>
            <div className='flex gap-5 text-3xl text-blue-500'>
                {totalRemainingDays ? `${totalRemainingDays} d` : 'Today'}
            </div>
        </div>
    )
})
