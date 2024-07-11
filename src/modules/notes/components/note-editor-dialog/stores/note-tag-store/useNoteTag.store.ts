import { useQuery, useQueryClient } from '@tanstack/react-query'
import { INoteTagStoreSchema } from './types'
import { notesKeys } from '../../../../shared-services/keys'

export const useNoteTag$ = () => {
    const queryClient = useQueryClient()

    const { data: store } = useQuery<INoteTagStoreSchema>({
        queryKey: notesKeys.useNoteTag$(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        initialData: { value: '' },
    })

    const setStore = (value: string) => {
        queryClient.setQueryData<INoteTagStoreSchema>(notesKeys.useNoteTag$(), { value })
    }

    return { store, setStore }
}
