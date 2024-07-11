import { useNoteEditor$ } from '../stores/note-editor-store/useNoteEditor.store.ts'
import { formatDateWithTimezone } from '@/helpers/date.helpers'
import { INoteSchema } from '@/modules/notes/shared-services/types.ts'
import { useNoteData } from './useNoteData.ts'

export const useNoteEditorFormInitialValues = () => {
    const { store } = useNoteEditor$()
    const { isLoading, data } = useNoteData()
    const initialValues: INoteSchema = initialNote()

    return { store, initialValues: data || initialValues, isLoading }
}

const initialNote = (): INoteSchema => ({
    id: crypto.randomUUID(),
    created_at: formatDateWithTimezone(),
    deleted_at: null,
    is_favorite: false,
    archived: false,
    description: '',
    tag: '',
})
