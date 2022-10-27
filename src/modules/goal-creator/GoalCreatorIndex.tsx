import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { GoalCreateModeIndex } from './GoalCreateModeIndex'
import { GoalEditModeIndex } from './GoalEditModeIndex'

export const GoalCreatorIndex: React.FC = observer(() => {
    const {
        editable_goal,
        new_goal: { isNewGoal, id },
    } = useGoalsStore()

    if (!editable_goal || !id) return null

    return isNewGoal ? <GoalCreateModeIndex /> : <GoalEditModeIndex />
})
