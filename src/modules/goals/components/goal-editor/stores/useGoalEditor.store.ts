import { useQuery, useQueryClient } from '@tanstack/react-query'
import { IGoalEditorStoreSchema, KEY_GoalEditorStore, goalEditorMode } from './types'

export const useGoalEditor$ = () => {
    const queryClient = useQueryClient()

    const { data: state } = useQuery<IGoalEditorStoreSchema>({
        queryKey: KEY_GoalEditorStore(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        initialData: { open: false, goalId: null, goalEditorMode: null },
    })

    const setState = (state: IGoalEditorStoreSchema) => {
        queryClient.setQueryData<IGoalEditorStoreSchema>(KEY_GoalEditorStore(), state)
    }

    const onCancel = () => {
        queryClient.setQueryData<IGoalEditorStoreSchema>(KEY_GoalEditorStore(), {
            open: false,
            goalId: null,
            goalEditorMode: null,
        })
    }

    const viewMode = state.goalEditorMode === goalEditorMode.view
    const newMode = state.goalEditorMode === goalEditorMode.new
    const editMode = state.goalEditorMode === goalEditorMode.edit

    return { state, viewMode, newMode, editMode, setState, onCancel }
}
