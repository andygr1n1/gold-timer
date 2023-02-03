import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { GoalCreateModeIndex } from './GoalCreateModeIndex'
import { GoalEditModeIndex } from './GoalEditModeIndex'

export const GoalCreatorIndex: React.FC = observer(() => {
    const {
        new_goal: { isNewGoal },
    } = useGoalsStore()

    return isNewGoal ? <GoalCreateModeIndex /> : <GoalEditModeIndex />
})
