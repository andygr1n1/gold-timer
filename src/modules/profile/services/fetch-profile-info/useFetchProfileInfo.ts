import { useQuery } from '@tanstack/react-query'
import { useUser$ } from '@/services/user-store/userUser.store'
import { query_fetchProfileInfo } from './query_fetchProfileInfo'

export const useFetchProfileInfo = () => {
    const { userId } = useUser$()
    const { isLoading, data } = useQuery({
        queryKey: ['useFetchProfileInfo', userId],
        queryFn: () => query_fetchProfileInfo({ id: userId }),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        enabled: !!userId,
    })

    return {
        isLoading,
        data,
    }
}
