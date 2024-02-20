import { query_userCoinsInfo } from '@/components/top-bar/service/query_userCoinsInfo'
import { useQuery } from '@tanstack/react-query'
import { query_artifactsCount } from './query_artifactsCount'
import { getUserId } from '@/functions/universalCookie.helper'

type IArtifactsCount = { activeNotesCount: number; activeSprintsCount: number; activeGoalsCount: number }

export const useFetchArtifactsCount = (): IArtifactsCount => {
    const { data: goalsData } = useQuery({
        queryKey: ['useFetchUserCoinsInfo'],
        queryFn: async () => await query_userCoinsInfo(getUserId()),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })

    const { data: artifactsData } = useQuery({
        queryKey: ['useFetchArtifactsCount'],
        queryFn: async () => await query_artifactsCount(getUserId()),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })
    return {
        activeGoalsCount: goalsData?.activeGoalsCount || 0,
        activeNotesCount: artifactsData?.activeNotesCount || 0,
        activeSprintsCount: artifactsData?.activeSprintsCount || 0,
    }
}
