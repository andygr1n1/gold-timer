import { useQuery } from '@tanstack/react-query'
import { KEY_FetchActiveGoals } from '../keys'
import { query_fetchActiveGoals } from './query_fetchActiveGoals'
import { useUserStore } from '@/services/user-store/useUserStore.service'

export const useFetchActiveGoals = (props: { limit: number }) => {
    const { limit } = props
    const { userId } = useUserStore()
    const { isLoading, data: activeGoals } = useQuery({
        queryKey: KEY_FetchActiveGoals(limit, userId),
        queryFn: async () => await query_fetchActiveGoals({ limit, userId }),
        staleTime: 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        enabled: !!userId,
    })

    return { isLoading, activeGoals }
}
