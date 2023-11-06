import { observer } from 'mobx-react-lite'
import todayLogoIcon from '@/assets/today-goal-logo.svg'
// import favoriteIcon from '@/assets/heart-favorite.svg'
import ritualLogoIcon from '@/assets/ritual-logo.svg'
import expiredLogoIcon from '@/assets/expired-goals-logo.svg'
import { IGoal$ } from '../../../../mst/types'

export const GoalDetails: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    return (
        <div className='flex w-full items-center justify-center  gap-5 rounded-md'>
            <GoalDaysUntilDeadline goal={goal} />
            <GoalRitualCount goal={goal} />
            <ImageByGoalType goal={goal} />
            {/* <GoalDeleted goal={goal} /> */}
        </div>
    )
})

// const GoalDeleted: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
//     return goal.deleted_at ? (
//         <Icon
//             icon='material-symbols-light:auto-delete-outline'
//             className='mb-1 min-w-[55px] text-[#9c0b1c]'
//             width={70}
//             height={70}
//         />
//     ) : null
// })

const ImageByGoalType: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { isExpired, hasRitualPower: isRitualGoal } = goal
    let goalIcon = todayLogoIcon
    let className = 'w-[60px] h-[60px]'
    if (isExpired) {
        goalIcon = expiredLogoIcon
    }
    if (isRitualGoal) {
        goalIcon = ritualLogoIcon
    }
    return (
        <div className='flex items-center justify-center gap-5'>
            {/* {is_favorite && <img src={favoriteIcon} width={55} height={55} />} */}
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
