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
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
import { PopoverGoalActions } from '@/components/popover-goal-actions/PopoverGoalActions'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState'
import clsx from 'clsx'

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
        <PopoverGoalActions popoverState={popoverState} setPopoverState={setPopoverState} goal={goal} forceMode={true}>
            <XBadge
                overflowCount={999}
                style={badgeClass}
                offset={[-6, 1]}
                count={
                    goal.totalRemainingDays > 1 ? (
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
                    className={`${styles['goal']} ${goalClass}`}
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
        </PopoverGoalActions>
    )
})