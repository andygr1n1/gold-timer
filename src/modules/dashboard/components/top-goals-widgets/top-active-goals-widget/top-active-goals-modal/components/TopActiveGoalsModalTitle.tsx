import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

export const TopActiveGoalsModalTitle: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()

    let title = 'Active goals'
    if (new_goal) title = 'Goal creator mode'
    if (new_goal.goal_ritualized_mode) title = 'Goal ritualize mode'

    return <div>{title}</div>
})
