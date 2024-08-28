import { goalStatusEnum } from '@/modules/goals/shared-service'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { type IGoalsFiltersSchema, KEY_useGoalsFiltersStore } from './types'
import { type ChangeEvent, useMemo } from 'react'
import { debounce } from 'lodash-es'

export const useGoalsFilters = () => {
    const queryClient = useQueryClient()

    const { data: store } = useQuery<IGoalsFiltersSchema>({
        queryKey: KEY_useGoalsFiltersStore(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        initialData: { searchInput: '', serverSearchInput: '', status: goalStatusEnum.active },
    })

    const onChangeServerSearchInput = useMemo(() => {
        return debounce((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            queryClient.setQueryData(KEY_useGoalsFiltersStore(), {
                ...store,
                serverSearchInput: e.target.value,
                searchInput: e.target.value,
            })
            // window.queryClient?.invalidateQueries({ queryKey: ['KEY_FetchGoalsByFilter', state] })
        }, 1000)
    }, [])

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        queryClient.setQueryData(KEY_useGoalsFiltersStore(), { ...store, searchInput: e.target.value })
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
