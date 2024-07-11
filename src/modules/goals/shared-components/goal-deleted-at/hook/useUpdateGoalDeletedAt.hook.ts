import { useMutation } from '@tanstack/react-query'
import { useInvalidateGoals } from '../../../shared-hooks/useInvalidateGoals'
import { mutation_updateGoalDeletedAt } from '../service/mutation_updateGoalDeletedAt'
import { useGoalEditor$ } from '@/modules/goals/components/goal-editor-dialog/stores/goal-editor-store/useGoalEditor.store'
import { goalEditorMode } from '@/modules/goals/components/goal-editor-dialog/stores/goal-editor-store/types'

export const useUpdateGoalDeletedAt = () => {
    const { onSuccess } = useInvalidateGoals()
    const { store: state, editMode, setStore: setState } = useGoalEditor$()

    const mutation = useMutation({
        mutationFn: ({ goalId, deletedAt }: { goalId: string; deletedAt: null | string }) =>
            mutation_updateGoalDeletedAt({ goalId, deletedAt }),
        onSuccess: (res) => {
            if (state.open && editMode && res) {
                setState({ goalId: res.id, open: true, goalEditorMode: goalEditorMode.view })
            }

            onSuccess(res)
        },
    })

    const updateGoalDeletedAt = (props: { goalId: string; deletedAt: null | string }) => {
        const { goalId, deletedAt } = props
        mutation.mutate({ goalId, deletedAt })
    }

    return { updateGoalDeletedAt }
}
