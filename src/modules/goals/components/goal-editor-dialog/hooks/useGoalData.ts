import { useFetchGoal } from '../service/useFetchGoal'
import { useGoalEditor$ } from '../stores/goal-editor-store/useGoalEditor.store'

export const useGoalData = () => {
    const { store: state } = useGoalEditor$()
    const { isLoading, data } = useFetchGoal({ goalId: state.goalId })
    return {
        isLoading,
        data,
    }
}
