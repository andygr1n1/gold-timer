import { useQuery } from '@tanstack/react-query'
import { query_fetchRitualGoals } from './query_fetchRitualGoals'
import { useUserStore } from '@/services/user-store/useUserStore.service'
import { KEY_FetchRitualGoals } from '../keys'

export const useFetchRitualGoals = (props: { limit: number; expiredGoals: boolean }) => {
    const { limit, expiredGoals } = props
    const { userId } = useUserStore()
    const { isLoading, data: ritualGoals } = useQuery({
        queryKey: KEY_FetchRitualGoals(limit, userId, expiredGoals),
        queryFn: async () => await query_fetchRitualGoals({ limit, userId, expiredGoals }),
        staleTime: 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        enabled: !!userId,
    })

    return { isLoading, ritualGoals }
}
