import { useAtom } from 'jotai'
import { loginAtom } from '@/modules/login/stores/login.store'
import { query_userCoinsInfo } from '@/components/top-bar/service/query_userCoinsInfo'
import { useQuery } from '@tanstack/react-query'
import { query_artifactsCount } from './query_artifactsCount'

type IArtifactsCount = { activeNotesCount: number; activeSprintsCount: number; activeGoalsCount: number }

export const useFetchArtifactsCount = (): IArtifactsCount => {
    const [{ user_id }] = useAtom(loginAtom)

    const { data: goalsData } = useQuery({
        queryKey: ['useFetchUserCoinsInfo', user_id],
        queryFn: async () => await query_userCoinsInfo(user_id),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })

    const { data: artifactsData } = useQuery({
        queryKey: ['useFetchArtifactsCount', user_id],
        queryFn: async () => await query_artifactsCount(user_id),
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
