import { useMutation } from '@tanstack/react-query'
import { useInvalidateNotes } from '@/modules/notes/shared-hooks/useInvalidateNotes'
import { useNoteEditor$ } from '@/modules/notes/components/note-editor-dialog/stores/note-editor-store/useNoteEditor.store'
import { editorMode } from '@/modules/notes/components/note-editor-dialog/stores/note-editor-store/types'
import { mutation_updateNoteIsArchived } from '../../shared-services/mutation_updateNoteIsArchived'

export const useUpdateNoteIsArchived = () => {
    const { onSuccess } = useInvalidateNotes()
    const { store, editMode, setStore } = useNoteEditor$()

    const mutation = useMutation({
        mutationFn: ({ id, isArchived }: { id: string; isArchived: boolean }) =>
            mutation_updateNoteIsArchived({ id, isArchived }),
        onSuccess: (res) => {
            if (store.open && editMode && res) {
                setStore({ id: res.id, open: true, editorMode: editorMode.view })
            }

            onSuccess()
        },
    })

    const toggleArchived = ({ id, isArchived }: { id: string; isArchived: boolean }) => {
        mutation.mutate({ id, isArchived })
    }

    return { toggleArchived }
}
