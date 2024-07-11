import { useQuery } from '@tanstack/react-query'
import { dashboardService } from './dashboardService'
import { useUserStore$ } from '@/services/user-store/useUserStore.service'

export const useFetchArtifactsCount = () => {
    const { userId } = useUserStore$()

    const { data } = useQuery(dashboardService.useFetchArtifactsCount({ userId }))

    return {
        activeGoalsCount: data?.activeGoalsCount || 0,
        activeNotesCount: data?.activeNotesCount || 0,
        activeSprintsCount: data?.activeSprintsCount || 0,
    }
}
