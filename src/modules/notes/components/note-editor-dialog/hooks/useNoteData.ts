import { useFetchNote } from '@/modules/notes/shared-services/fetch-note/useFetchNote'
import { useNoteEditor$ } from '../stores/note-editor-store/useNoteEditor.store'

export const useNoteData = () => {
    const { store } = useNoteEditor$()
    const { isLoading, data } = useFetchNote({ id: store.id })
    return {
        isLoading,
        data,
    }
}
