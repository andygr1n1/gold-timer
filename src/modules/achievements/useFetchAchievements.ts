import { useQuery } from '@tanstack/react-query'
import { query_fetchAchievements } from './graphql/query_fetchAchievements'
import type { achievements } from 'gold-timer-genql/lib/generated'
import { useUser$ } from '@/services/user-store/userUser.store'
// import { queryClient } from '@/App'

export const useFetchAchievements = (): {
    isLoading: boolean
    visibleAchievements: Partial<achievements>[]
    visibleAchievementsLength: number
} => {
    const { userId } = useUser$()
    const { data, isLoading /* , isPending, isError,  error */ } = useQuery({
        queryKey: ['achievements', userId],
        queryFn: async () => await query_fetchAchievements({ userId }),
        staleTime: 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        enabled: !!userId,
    })

    return { isLoading, visibleAchievements: data || [], visibleAchievementsLength: data?.length || 0 }
}
