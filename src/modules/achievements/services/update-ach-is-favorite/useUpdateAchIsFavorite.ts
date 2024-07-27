import { useMutation } from '@tanstack/react-query'
import { editorMode } from '@/modules/notes/components/note-editor-dialog/stores/note-editor-store/types'
import { mutation_updateAchIsFavorite } from '@/modules/achievements/services/update-ach-is-favorite/mutation_updateAchIsFavorite'
import { useAchEditor$ } from '../../components-shared/ach-editor-dialog/stores/useAchEditor.store'
import { useInvalidateAchs } from '@/modules/achievements/hooks/useInvalidateAchs'

export const useUpdateAchIsFavorite = () => {
    const { onSuccess } = useInvalidateAchs()
    const { open, editMode, setStore } = useAchEditor$()

    const mutation = useMutation({
        mutationFn: ({ id, isFavorite }: { id: string; isFavorite: boolean }) =>
            mutation_updateAchIsFavorite({ id, isFavorite }),
        onSuccess: (res) => {
            if (open && editMode && res) {
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
