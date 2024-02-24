import { observer } from 'mobx-react-lite'
import { getTopGoalColor } from '../../../helpers/getTopGoalColor'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { IActiveGoalOptimized } from '@/modules/goals/service/types'
import { TopGoalMenu } from './TopGoalMenu'
import { selectedGoalAtom, selectedGoalAtom$ } from '@/modules/goals/stores/selectedGoal.store'
import { IconBellUrgent } from '@/assets/icons/IconBellUrgent'
import { calculateIsExpired } from '@/modules/goals/helpers/optimizeActiveGoalsData'
import { truncate } from 'lodash-es'

export const TopGoal: React.FC<{ goal: IActiveGoalOptimized; className?: string; zIndex?: number }> = observer(
    ({ goal, className = '', zIndex }) => {
        const { popoverState, setPopoverState } = useTogglePopoverState()
        const goalClass = getTopGoalColor(goal).containerClass
        const isExpired = calculateIsExpired(goal)

        return (
            <XDropdown
                open={popoverState}
                onOpenChange={() => {
                    setPopoverState(!popoverState)
                }}
                overlayStyle={{ zIndex }}
                trigger={['click', 'contextMenu']}
                dropdownRender={() => <TopGoalMenu action={() => setPopoverState(false)} goal={goal} />}
            >
                <div
                    onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        selectedGoalAtom$.set(selectedGoalAtom, { id: goal.id, is_edit: false, is_new: false })
                        setPopoverState(false)
                    }}
                    onContextMenu={() => {
                        setPopoverState(!popoverState)
                    }}
                    key={goal.id}
                    className={`relative flex h-[60px] cursor-pointer items-center justify-between rounded-lg duration-300 ${goalClass} ${className} `}
                >
                    <span className='h-fit w-[calc(100%-16px)] items-center  rounded-md p-2 align-middle text-white'>
                        {truncate(goal.title, { length: 70 })}
                    </span>
                    <span className='flex w-12 items-center justify-center px-1'>
                        {isExpired ? null : isDeadline(goal) ? (
                            <IconBellUrgent width={30} height={30} className='text-white' />
                        ) : (
                            <span className='text-xl text-white opacity-70'>
                                {goal.totalRemainingDays < 9999 ? goal.totalRemainingDays : '9999+'}
                            </span>
                        )}
                    </span>
                </div>
            </XDropdown>
        )
    },
)

const isDeadline = (goal: IActiveGoalOptimized) => {
    const isExpired = calculateIsExpired(goal)
    if (isExpired) return true
    // if (goal.isRitual) {
    return goal.totalRemainingDays < 1
    // }

    // return goal.totalRemainingDays <= 1
}
