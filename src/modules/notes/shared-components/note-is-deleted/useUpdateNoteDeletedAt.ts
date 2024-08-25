import { useMutation } from '@tanstack/react-query'
import { mutation_updateNoteDeletedAt } from '../../shared-services/mutation_updateNoteDeletedAt'
import { goalEditorMode } from '@/modules/goals/components/goal-editor-dialog/stores/goal-editor-store/types'
import { useNoteEditor$ } from '../../components/note-editor-dialog/stores/note-editor-store/useNoteEditor.store'
import { useInvalidateNotes } from '../../shared-hooks/useInvalidateNotes'

export const useUpdateNoteDeletedAt = () => {
    const { onSuccess } = useInvalidateNotes()
    const { store, editMode, setStore: setState } = useNoteEditor$()

    const mutation = useMutation({
        mutationFn: ({ id, deletedAt }: { id: string; deletedAt: null | string }) =>
            mutation_updateNoteDeletedAt({ id, deletedAt }),
        onSuccess: (res) => {
            if (store.open && editMode && res) {
                setState({ id: res.id, open: true, editorMode: goalEditorMode.edit })
            }

            onSuccess()
        },
    })

    const updateNoteDeletedAt = ({ id, deletedAt }: { id: string; deletedAt: null | string }) => {
        mutation.mutate({ id, deletedAt })
    }

    return { updateNoteDeletedAt }
}
