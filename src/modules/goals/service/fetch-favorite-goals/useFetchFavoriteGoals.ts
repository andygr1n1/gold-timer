import { useQuery } from '@tanstack/react-query'
import { KEY_FetchFavoriteGoals } from '../keys'
import { useUserStore } from '@/services/user-store/useUserStore.service'
import { query_fetchFavoriteGoals } from './query_fetchFavoriteGoals'

export const useFetchFavoriteGoals = (props: { limit: number }) => {
    const { limit } = props
    const { userId } = useUserStore()
    const { isLoading, data: favoriteGoals } = useQuery({
        queryKey: KEY_FetchFavoriteGoals(limit, userId),
        queryFn: async () => await query_fetchFavoriteGoals({ limit, userId }),
        staleTime: 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        enabled: !!userId,
    })

    return { isLoading, favoriteGoals }
}
