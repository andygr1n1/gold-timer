import { toggleModalState } from '@/components-modals/goals-list-modal/GoalsListModal'
import { RdBadge } from '@/components-rd/rdbadge/RdBadge'
import { ACTIVE_GOAL_TYPE_ENUM } from '@/helpers/enums'
import { IGoal$ } from '@/mst/types'
import { useGoalsStore } from '@/StoreProvider'
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
        <RdBadge style={badgeClass} offset={[-6, 1]} count={goal.daysEstimationCount || '🔔'}>
            <div
                key={goal.id}
                className={`${styles['goal']} ${goalClass}`}
                onClick={() => {
                    onChangeField('active_collapse_key', goal.id)
                    handleModalState()
                }}
            >
                {truncate(goal.title, { length: 35 })}
            </div>
        </RdBadge>
    )
})
