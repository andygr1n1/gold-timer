import { useQuery } from '@tanstack/react-query'
import { dashboardService } from './dashboardService'
import { useUser$ } from '@/services/user-store/userUser.store'

export const useFetchArtifactsCount = () => {
    const { userId } = useUser$()

    const { data } = useQuery(dashboardService.useFetchArtifactsCount({ userId }))

    return {
        activeGoalsCount: data?.activeGoalsCount || 0,
        activeNotesCount: data?.activeNotesCount || 0,
        activeSprintsCount: data?.activeSprintsCount || 0,
        activeAchCount: data?.activeAchCount || 0,
    }
}
