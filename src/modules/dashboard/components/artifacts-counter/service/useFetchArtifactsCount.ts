import { useQuery } from '@tanstack/react-query'
import { query_artifactsCount } from './query_artifactsCount'
import { getUserId } from '@/helpers/getUserData'
import { KEY_FetchArtifactsCount } from './keys'

type IArtifactsCount = { activeNotesCount: number; activeSprintsCount: number; activeGoalsCount: number }

export const useFetchArtifactsCount = (): IArtifactsCount => {
    const { data: artifactsData } = useQuery({
        queryKey: KEY_FetchArtifactsCount(),
        queryFn: async () => await query_artifactsCount(getUserId()),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    })
    return {
        activeGoalsCount: artifactsData?.activeGoalsCount || 0,
        activeNotesCount: artifactsData?.activeNotesCount || 0,
        activeSprintsCount: artifactsData?.activeSprintsCount || 0,
    }
}
