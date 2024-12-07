import { useQuery } from '@tanstack/react-query'
import { dashboardService } from './dashboardService'
import { useUser$ } from '@/modules/app/mst/StoreProvider'

export const useFetchArtifactsCount = () => {
    const { id: userId } = useUser$()

    const { data } = useQuery(dashboardService.useFetchArtifactsCount({ userId }))

    return {
        activeGoalsCount: data?.activeGoalsCount || 0,
        activeNotesCount: data?.activeNotesCount || 0,
        activeAchCount: data?.activeAchCount || 0,
    }
}
