import { useQuery } from '@tanstack/react-query'
import { query_fetchAchievements } from './graphql/query_fetchAchievements'
import type { achievements } from '@/graphql/generated'
// import { queryClient } from '@/App'

export const useFetchAchievements = (): {
    isLoading: boolean
    visibleAchievements: Partial<achievements>[]
    visibleAchievementsLength: number
} => {
    const { data, isLoading /* , isPending, isError,  error */ } = useQuery({
        queryKey: ['achievements'],
        queryFn: async () => await query_fetchAchievements(),
        initialData: () => {
            return window.queryClient.getQueryData<achievements[]>(['achievements'])
        },
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })

    const visibleAchievements = data?.filter((ach) => ach.visible) || []
    const visibleAchievementsLength = visibleAchievements.length
    return { isLoading, visibleAchievements, visibleAchievementsLength }
}
