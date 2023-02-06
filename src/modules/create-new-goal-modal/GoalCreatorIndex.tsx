import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { GoalEditModeIndex } from './GoalEditModeIndex'

export const GoalCreatorIndex: React.FC = observer(() => {
    const {
        new_goal: { isNewGoal },
    } = useGoalsStore()

    if (isNewGoal) return null

    return <GoalEditModeIndex />
})
