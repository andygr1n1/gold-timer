import { XBadge } from '@/components-x/x-badge/XBadge'
import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { IGoal$ } from '@/modules/goals/mst/types'
import { useRootStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { truncate } from 'lodash-es'
import { observer } from 'mobx-react-lite'
import { getTopGoalColor } from './helpers/getTopGoalColor'
import styles from './TopGoalsWidgets.module.scss'
import { useRef } from 'react'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState'
import clsx from 'clsx'
import { PopoverGoalActionsContent } from '@/components/popover-goal-actions/PopoverGoalActionsContent'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'

export const TopGoal: React.FC<{ goal: IGoal$; type: ACTIVE_GOAL_TYPE_ENUM }> = observer(({ goal }) => {
    const {
        goals$: { openViewMode },
    } = useRootStore()
    const { isLargeDesktop } = useWindowMatchMedia(['isLargeDesktop'])
    const { popoverState, setPopoverState } = useTogglePopoverState()
    const goalClass = getTopGoalColor(goal).containerClass
    const badgeClass = getTopGoalColor(goal).badgeStyle

    let touchTrigger = useRef(false)

    const useMobileTrigger = () => {
        touchTrigger!.current = !touchTrigger!.current
    }

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
            <XBadge
                overflowCount={999}
                style={badgeClass}
                offset={[-6, 1]}
                count={
                    goal.isExpired ? null : goal.totalRemainingDays > 1 ? (
                        goal.totalRemainingDays
                    ) : (
                        <Icon
                            icon='emojione-v1:ringing-bell'
                            className={clsx(goal.hasRitualPower && 'hidden')}
                            width={20}
                            height={20}
                        />
                    )
                }
            >
                <div
                    // title={goal.title}
                    key={goal.id}
                    className={`overflow-wrap-anywhere duration-300 ${styles['goal']} ${goalClass}`}
                    onClick={() => {
                        openViewMode(goal.id)
                    }}
                    onContextMenu={(e) => {
                        e.preventDefault()
                        isLargeDesktop && setPopoverState(true)
                    }}
                    onTouchStart={() => {
                        const timer = setTimeout(() => {
                            useMobileTrigger()
                            touchTrigger?.current && setPopoverState(() => true)
                            clearTimeout(timer)
                        }, 500)
                    }}
                    onTouchEnd={() => {
                        useMobileTrigger()
                    }}
                >
                    <span>{truncate(goal.title, { length: 22 })}</span>
                </div>
            </XBadge>
        </XDropdown>
    )
})
