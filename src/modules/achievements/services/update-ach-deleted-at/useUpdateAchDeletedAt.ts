import { useMutation } from '@tanstack/react-query'
import { goalEditorMode } from '@/modules/goals/components/goal-editor-dialog/stores/goal-editor-store/types'
import { useInvalidateAchs } from '@/modules/achievements/hooks/useInvalidateAchs'
import { useAchEditor$ } from '../../components-shared/ach-editor-dialog/stores/useAchEditor.store'
import { mutation_updateAchDeletedAt } from '@/modules/achievements/services/update-ach-deleted-at/mutation_updateAchDeletedAt'

export const useUpdateAchDeletedAt = () => {
    const { onSuccess } = useInvalidateAchs()
    const { open, editMode, setStore: setState } = useAchEditor$()

    const mutation = useMutation({
        mutationFn: ({ id, deletedAt }: { id: string; deletedAt: null | string }) =>
            mutation_updateAchDeletedAt({ id, deletedAt }),
        onSuccess: (res) => {
            if (open && editMode && res) {
                setState({ id: res.id, open: true, editorMode: goalEditorMode.view })
            }

            onSuccess()
        },
    })

    const updateDeletedAt = ({ id, deletedAt }: { id: string; deletedAt: null | string }) => {
        mutation.mutate({ id, deletedAt })
    }

    return { updateDeletedAt }
}
