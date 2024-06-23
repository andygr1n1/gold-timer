import { useQuery } from '@tanstack/react-query'
import { query_fetchExpiredGoals } from './query_fetchExpiredGoals'
import { useUserStore } from '@/services/user-store/useUserStore.service'
import { KEY_FetchExpiredGoals } from '../keys'

export const useFetchExpiredGoals = (props: { limit: number }) => {
    const { limit } = props
    const { userId } = useUserStore()
    const { isLoading, data: expiredGoals } = useQuery({
        queryKey: KEY_FetchExpiredGoals(limit, userId),
        queryFn: async () => await query_fetchExpiredGoals({ limit, userId }),
        staleTime: 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        enabled: !!userId,
    })

    return { isLoading, expiredGoals }
}
