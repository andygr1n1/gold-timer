import { observer } from 'mobx-react-lite'
import todayLogoIcon from '@/assets/today-goal-logo.svg'
import favoriteIcon from '@/assets/heart-favorite.svg'
import ritualLogoIcon from '@/assets/ritual-logo.svg'
import expiredLogoIcon from '@/assets/expired-goals-logo.svg'
import { useGoalsStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'

export const GoalDetails: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()
    if (!new_goal) return null

    return (
        <div className='flex w-full items-center justify-center  gap-5 rounded-md'>
            <GoalDeleted />
            <ImageByGoalType />
            <GoalRitualCount />
            <GoalDaysUntilDeadline />
        </div>
    )
})

const GoalDeleted = observer(() => {
    const { new_goal } = useGoalsStore()
    if (!new_goal || !new_goal?.deleted_at) return null
    return <Icon icon='tdesign:delete-time' className='mb-1 min-w-[55px] text-[#9c0b1c]' width={55} height={55} />
})

const ImageByGoalType = observer(() => {
    const { new_goal } = useGoalsStore()
    if (!new_goal) return null
    const { is_favorite, isExpired, isRitualGoal, create_ritual_mode } = new_goal
    let goalIcon = todayLogoIcon
    let className = 'pb-1 w-[70px] h-[70px]'
    if (isExpired) {
        goalIcon = expiredLogoIcon
        className = 'w-[60px] h-[60px]'
    }
    if (isRitualGoal || create_ritual_mode) {
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

const GoalRitualCount = observer(() => {
    const { new_goal } = useGoalsStore()
    if (!new_goal || !new_goal?.isRitualGoal) return null
    const { goal_ritual } = new_goal

    return (
        <div className='flex flex-col items-center justify-center gap-2 '>
            <div className='pl-2 font-extralight'>Power</div>
            <div className='flex gap-5 text-3xl text-green-500'>{goal_ritual?.ritual_power}</div>
        </div>
    )
})

const GoalDaysUntilDeadline = observer(() => {
    const { new_goal } = useGoalsStore()
    if (!new_goal) return null
    const { totalRemainingDays } = new_goal

    return (
        <div className='flex flex-col items-center justify-center gap-2 '>
            <div className='pl-2 font-extralight'>Deadline</div>
            <div className='flex gap-5 text-3xl text-blue-500'>
                {totalRemainingDays ? `${totalRemainingDays} d` : 'Today'}
            </div>
        </div>
    )
})
