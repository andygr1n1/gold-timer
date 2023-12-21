import { XBadge } from '@/components-x/x-badge/XBadge'
import { IGoal$ } from '@/modules/goals/mst/types'
import { useRootStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { getTopGoalColor } from './helpers/getTopGoalColor'
import styles from './TopGoalsWidgets.module.scss'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState'
import { PopoverGoalActionsContent } from '@/components/popover-goal-actions/PopoverGoalActionsContent'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'

export const TopGoal: React.FC<{ goal: IGoal$; className?: string }> = observer(({ goal, className = '' }) => {
    const {
        goals$: { openViewMode },
    } = useRootStore()
    const { popoverState, setPopoverState } = useTogglePopoverState()
    const goalClass = getTopGoalColor(goal).containerClass
    const badgeClass = getTopGoalColor(goal).badgeStyle

    return (
        <XDropdown
            open={popoverState}
            onOpenChange={() => {
                setPopoverState(!popoverState)
            }}
            trigger={['contextMenu']}
            dropdownRender={() => (
                <PopoverGoalActionsContent action={() => setPopoverState(false)} goal={goal} forceMode={false} />
            )}
        >
            <div
                // title={goal.title}
                key={goal.id}
                className={`duration-300 ${styles['goal']} ${goalClass} ${className} `}
                onClick={() => {
                    openViewMode(goal.id)
                }}
                onContextMenu={() => setPopoverState(!popoverState)}
            >
                {/* <span className='py-5 pl-5'>{truncate(goal.title, { length: 22 })}</span> */}
                <span className='h-fit w-[calc(100%-16px)] items-center overflow-hidden text-ellipsis whitespace-nowrap rounded-md p-2 align-middle text-white'>
                    {goal.title}
                </span>
                <XBadge
                    className='absolute right-[-5px] top-[-10px]'
                    overflowCount={999}
                    style={badgeClass}
                    offset={[-6, 1]}
                    count={
                        goal.isExpired ? null : isDeadline(goal) ? (
                            <Icon
                                icon='emojione-v1:ringing-bell'
                                // className={clsx(goal.isRitualGoal && 'hidden')}
                                width={20}
                                height={20}
                            />
                        ) : (
                            goal.totalRemainingDays
                        )
                    }
                />
            </div>
        </XDropdown>
    )
})

const isDeadline = (goal: IGoal$) => {
    if (goal.isExpired) return true
    if (goal.isRitualGoal) {
        return goal.totalRemainingDays < 1
    }

    return goal.totalRemainingDays <= 1
}
