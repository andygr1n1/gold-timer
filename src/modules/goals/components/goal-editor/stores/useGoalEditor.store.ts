import { useQuery, useQueryClient } from '@tanstack/react-query'
import { IGoalEditorStoreSchema, KEY_GoalEditorStore } from './types'

export const useGoalEditor$ = () => {
    const queryClient = useQueryClient()

    const { data: state } = useQuery<IGoalEditorStoreSchema>({
        queryKey: KEY_GoalEditorStore(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        initialData: { open: false, edit: false, goalId: null },
    })

    const setState = (state: IGoalEditorStoreSchema) => {
        queryClient.setQueryData(KEY_GoalEditorStore(), state)
    }

    const onCancel = () => {
        queryClient.setQueryData(KEY_GoalEditorStore(), { open: false, goalId: null, edit: false })
    }

    const viewMode = !state.edit

    return { state, viewMode, setState, onCancel }
}
