import { observer } from 'mobx-react-lite'
import { Icon } from '@iconify/react'
import { IGoal$ } from '@/mst/types'
import { Divider } from 'antd'
import { GOAL_TYPE_ENUM } from '@/helpers/enums'

export const GoalRightMenu: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const {
        goGoalViewMode,
        createNewChild,
        remainingTimeDaysCount,
        is_favorite,
        goalType,
        isFrozen,
        isCompleted,
        isRitualGoal,
        isExpired,
        favoriteGoal,
    } = goal

    let styleByGoalType = 'hover:text-green-600'

    if (isRitualGoal) styleByGoalType = 'hover:text-indigo-600'

    if (isExpired) styleByGoalType = 'hover:text-red-600'

    if (isFrozen) styleByGoalType = 'hover:text-blue-600'

    if (isCompleted) styleByGoalType = 'hover:text-amber-600'

    const goalHasTimeDaysCount =
        !!remainingTimeDaysCount && (goalType === GOAL_TYPE_ENUM.ACTIVE || goalType === GOAL_TYPE_ENUM.RITUALIZED)

    return (
        <div className='flex w-8 flex-col items-center rounded-r-md pt-6'>
            {/* Days */}
            <div title='Days' className='flex w-full items-center justify-center p-2'>
                <div
                    className='
                        absolute top-2 right-1 flex cursor-default
                        items-center justify-center p-1 text-base font-bold'
                >
                    {goalHasTimeDaysCount && (
                        <div className='flex min-w-[20px] items-center justify-center text-base font-bold'>
                            {Math.abs(remainingTimeDaysCount)}
                        </div>
                    )}
                </div>
            </div>
            <Divider className='my-2 bg-gray-400 ' />
            {/* Expand */}
            <div title='Expand' className='flex w-full items-center justify-center p-2'>
                <Icon
                    icon='fa:expand'
                    className={`cursor-pointer text-xl transition-colors ${styleByGoalType}`}
                    onClick={goGoalViewMode}
                />
            </div>
            <Divider className='my-2 bg-gray-400' />
            {is_favorite ? (
                <div title='Unfavorite' className='flex w-full items-center justify-center '>
                    <Icon
                        icon='ic:outline-favorite'
                        className='cursor-pointer !text-2xl  text-red-700 transition-colors duration-300 hover:text-red-600'
                        onClick={favoriteGoal}
                    />
                </div>
            ) : (
                <div title='Favorite' className='flex w-full items-center justify-center '>
                    <Icon
                        icon='ic:baseline-favorite-border'
                        className='cursor-pointer !text-2xl  transition-colors duration-300 hover:text-red-600'
                        onClick={favoriteGoal}
                    />
                </div>
            )}
            <Divider className='my-2 bg-gray-400 ' />
            {/* New Child */}
            <div title='New Child' className='flex w-full items-center justify-center '>
                <Icon
                    icon='fluent:window-new-16-filled'
                    className={`cursor-pointer !text-3xl  transition-colors ${styleByGoalType}`}
                    onClick={createNewChild}
                />
            </div>
            <Divider className='my-2 bg-gray-400 ' />
        </div>
    )
})
