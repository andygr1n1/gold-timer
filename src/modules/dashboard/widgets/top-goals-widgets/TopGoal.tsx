import { toggleModalState } from '@/components-modals/goals-list-modal/GoalsListModal'
import { RdBadge } from '@/components-rd/rdbadge/RdBadge'
import { XTooltip } from '@/components-x/xtooltip/XTooltip'
import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { IGoal$ } from '@/mst/types'
import { useGoalsStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { truncate } from 'lodash'
import { observer } from 'mobx-react-lite'
import { getTopGoalColor } from './helpers/getTopGoalColor'
import styles from './TopGoalsWidgets.module.scss'

export const TopGoal: React.FC<{ goal: IGoal$; type: ACTIVE_GOAL_TYPE_ENUM }> = observer(({ goal, type }) => {
    const {
        onChangeField,
        filter$: { onChangeField: onFilterStoreChangeField },
    } = useGoalsStore()

    const goalClass = getTopGoalColor(goal).containerClass
    const badgeClass = getTopGoalColor(goal).badgeStyle

    const handleModalState = () => {
        onFilterStoreChangeField('goals_collapse_type', type)
        toggleModalState()
    }

    return (
        <XTooltip title={goal.title}>
            <RdBadge
                style={badgeClass}
                offset={[-6, 1]}
                count={goal.daysEstimationCount || <Icon icon='emojione-v1:ringing-bell' width={20} height={20} />}
            >
                <div
                    // title={goal.title}
                    key={goal.id}
                    className={`${styles['goal']} ${goalClass}`}
                    onClick={() => {
                        onChangeField('active_collapse_key', goal.id)
                        handleModalState()
                    }}
                >
                    <span>{truncate(goal.title, { length: 25 })}</span>
                </div>
            </RdBadge>
        </XTooltip>
    )
})
