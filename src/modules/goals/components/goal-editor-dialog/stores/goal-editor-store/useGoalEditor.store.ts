import { useQuery, useQueryClient } from '@tanstack/react-query'
import { type IGoalEditorStoreSchema, KEY_GoalEditorStore, goalEditorMode } from './types'

export const useGoalEditor$ = () => {
    const queryClient = useQueryClient()

    const { data: store } = useQuery<IGoalEditorStoreSchema>({
        queryKey: KEY_GoalEditorStore(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        initialData: { open: false, goalId: null, goalEditorMode: null },
    })

    const setStore = (store: IGoalEditorStoreSchema) => {
        queryClient.setQueryData<IGoalEditorStoreSchema>(KEY_GoalEditorStore(), store)
    }

    const onCancel = () => {
        queryClient.setQueryData<IGoalEditorStoreSchema>(KEY_GoalEditorStore(), {
            open: false,
            goalId: null,
            goalEditorMode: null,
        })
    }

    const viewMode = store.goalEditorMode === goalEditorMode.view
    const newMode = store.goalEditorMode === goalEditorMode.new
    const editMode = store.goalEditorMode === goalEditorMode.edit

    return { store, viewMode, newMode, editMode, setStore, onCancel, goalEditorMode: store.goalEditorMode }
}
