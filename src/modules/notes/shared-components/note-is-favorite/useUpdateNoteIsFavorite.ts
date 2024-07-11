import { useMutation } from '@tanstack/react-query'
import { mutation_updateNoteIsFavorite } from '../../shared-services/mutation_updateNoteIsFavorite'
import { useInvalidateNotes } from '@/modules/notes/shared-hooks/useInvalidateNotes'
import { useNoteEditor$ } from '@/modules/notes/components/note-editor-dialog/stores/note-editor-store/useNoteEditor.store'
import { editorMode } from '@/modules/notes/components/note-editor-dialog/stores/note-editor-store/types'

export const useUpdateNoteIsFavorite = () => {
    const { onSuccess } = useInvalidateNotes()
    const { store, editMode, setStore } = useNoteEditor$()

    const mutation = useMutation({
        mutationFn: ({ id, isFavorite }: { id: string; isFavorite: boolean }) =>
            mutation_updateNoteIsFavorite({ id, isFavorite }),
        onSuccess: (res) => {
            if (store.open && editMode && res) {
                setStore({ id: res.id, open: true, editorMode: editorMode.view })
            }

            onSuccess()
        },
    })

    const toggleFavorite = ({ id, isFavorite }: { id: string; isFavorite: boolean }) => {
        mutation.mutate({ id, isFavorite })
    }

    return { toggleFavorite }
}
