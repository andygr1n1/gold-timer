import { useQuery, useQueryClient } from '@tanstack/react-query'
import { INotesFiltersSchema } from './types'
import { ChangeEvent, useMemo } from 'react'
import { debounce } from 'lodash-es'
import { notesKeys } from '../../../shared-services/keys'
import { noteStatus } from '@/modules/notes/shared-services/types'

export const useNotesFilters$ = () => {
    const queryClient = useQueryClient()

    const { data: store } = useQuery<INotesFiltersSchema>({
        queryKey: notesKeys.useNotesFilters$(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        initialData: { searchInput: '', serverSearchInput: '', status: noteStatus.active },
    })

    const onChangeServerSearchInput = useMemo(() => {
        return debounce((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            queryClient.setQueryData(notesKeys.useNotesFilters$(), {
                ...store,
                serverSearchInput: e.target.value,
                searchInput: e.target.value,
            })
        }, 1000)
    }, [])

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        queryClient.setQueryData(notesKeys.useNotesFilters$(), { ...store, searchInput: e.target.value })
        onChangeServerSearchInput(e)
    }

    const serverSearchInput = store.serverSearchInput
    const searchInput = store.searchInput

    return {
        store,
        serverSearchInput,
        onChange,
        onChangeServerSearchInput,
        searchInput,
    }
}
