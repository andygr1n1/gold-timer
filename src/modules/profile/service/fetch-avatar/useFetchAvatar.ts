import { useQuery } from '@tanstack/react-query'
import { query_fetchAvatar } from './query_fetchAvatar'
import { KEY_FetchAvatar } from '../keys'

type IRes = {
    isLoading: boolean
    name: string
    avatar: string
}

export const useFetchAvatar = (): IRes => {
    const { data, isLoading } = useQuery({
        queryKey: KEY_FetchAvatar(),
        queryFn: async () => await query_fetchAvatar(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })

    return { isLoading, name: data?.name || '', avatar: data?.avatar || '' }
}
