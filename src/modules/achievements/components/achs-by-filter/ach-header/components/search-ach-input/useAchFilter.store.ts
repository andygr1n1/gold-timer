import { useQuery, useQueryClient } from '@tanstack/react-query'
import { ChangeEvent, useMemo } from 'react'
import { debounce } from 'lodash-es'
import { IInputFilter$Schema } from '@/services/types'

export const useAchFilter$ = () => {
    const queryClient = useQueryClient()
    const queryKey = ['useAchFilter$']

    const { data: store } = useQuery<IInputFilter$Schema>({
        queryKey,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        initialData: { searchInput: '', serverSearchInput: '' },
    })

    const onChangeServerSearchInput = useMemo(() => {
        return debounce((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            queryClient.setQueryData(queryKey, {
                ...store,
                serverSearchInput: e.target.value,
                searchInput: e.target.value,
            })
        }, 1000)
    }, [])

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        queryClient.setQueryData(queryKey, { ...store, searchInput: e.target.value })
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
