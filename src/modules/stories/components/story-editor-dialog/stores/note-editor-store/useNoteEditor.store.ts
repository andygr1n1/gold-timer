import { useQuery, useQueryClient } from '@tanstack/react-query'
import { INoteEditorStoreSchema, editorMode } from './types'
import { notesKeys } from '../../../../shared-services/keys'

export const useNoteEditor$ = () => {
    const queryClient = useQueryClient()

    const { data: store } = useQuery<INoteEditorStoreSchema>({
        queryKey: notesKeys.useNoteEditor$(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        initialData: { open: false, id: null, editorMode: null },
    })

    const setStore = (store: INoteEditorStoreSchema) => {
        queryClient.setQueryData<INoteEditorStoreSchema>(notesKeys.useNoteEditor$(), store)
    }

    const onCancel = () => {
        queryClient.setQueryData<INoteEditorStoreSchema>(notesKeys.useNoteEditor$(), {
            open: false,
            id: null,
            editorMode: null,
        })
    }

    const newMode = store.editorMode === editorMode.new
    const editMode = store.editorMode === editorMode.edit

    return { store, newMode, editMode, setStore, onCancel, editorMode: store.editorMode }
}
