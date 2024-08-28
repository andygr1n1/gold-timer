import { useQuery, useQueryClient } from '@tanstack/react-query'
import { type IGoalsSlidesEditorStoreSchema, KEY_GoalsSlidesEditorStore } from './types'

export const useGoalsSlidesEditor$ = () => {
    const queryClient = useQueryClient()

    const { data: store } = useQuery<IGoalsSlidesEditorStoreSchema>({
        queryKey: KEY_GoalsSlidesEditorStore(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        initialData: { open: false },
    })

    const onClose = () => {
        queryClient.setQueryData<IGoalsSlidesEditorStoreSchema>(KEY_GoalsSlidesEditorStore(), {
            open: false,
        })
    }

    const onOpen = () => {
        queryClient.setQueryData<IGoalsSlidesEditorStoreSchema>(KEY_GoalsSlidesEditorStore(), {
            open: true,
        })
    }

    return { store, onOpen, onClose }
}
