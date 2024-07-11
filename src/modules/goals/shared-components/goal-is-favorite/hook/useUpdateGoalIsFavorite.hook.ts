import { useMutation } from '@tanstack/react-query'
import { mutation_updateGoalIsFavorite } from '../service/mutation_updateGoalIsFavorite'
import { useInvalidateGoals } from '../../../shared-hooks/useInvalidateGoals'
import { useGoalEditor$ } from '@/modules/goals/components/goal-editor-dialog/stores/goal-editor-store/useGoalEditor.store'
import { goalEditorMode } from '@/modules/goals/components/goal-editor-dialog/stores/goal-editor-store/types'

export const useUpdateGoalIsFavorite = () => {
    const { onSuccess } = useInvalidateGoals()
    const { store: state, editMode, setStore: setState } = useGoalEditor$()

    const mutation = useMutation({
        mutationFn: ({ goalId, isFavorite }: { goalId: string; isFavorite: boolean }) =>
            mutation_updateGoalIsFavorite({ goalId, isFavorite }),
        onSuccess: (res) => {
            if (state.open && editMode && res) {
                setState({ goalId: res.id, open: true, goalEditorMode: goalEditorMode.view })
            }

            onSuccess(res)
        },
    })

    const toggleFavorite = (props: { goalId: string; isFavorite: boolean }) => {
        const { goalId, isFavorite } = props
        mutation.mutate({ goalId, isFavorite })
    }

    return { toggleFavorite }
}
