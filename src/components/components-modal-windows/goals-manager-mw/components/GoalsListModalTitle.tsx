import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

export const GoalsListModalTitle: React.FC = observer(() => {
    const {
        new_goal,
        editable_goal,
        filter$: { goalsCollapseData },
    } = useGoalsStore()

    let modalTitle = goalsCollapseData.title
    if (editable_goal) modalTitle = 'Goal creator mode'
    if (new_goal.goal_ritualized_mode) modalTitle = 'Goal ritualize mode'

    return <div>{modalTitle}</div>
})
