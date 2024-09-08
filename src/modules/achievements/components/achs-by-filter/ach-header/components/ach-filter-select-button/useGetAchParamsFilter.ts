import { isStatusActive, isStatusAll, isStatusArchived, isStatusDeleted, isStatusFavorite } from '@/services/guards'
import { type IArtifactStatus } from '@/services/types'
import { useLocation } from 'react-router-dom'

export const useGetAchParamsFilter = () => {
    const location = useLocation()
    const paramFilter: IArtifactStatus = location.state?.filter

    const isAll = isStatusAll(paramFilter)
    const isActive = isStatusActive(paramFilter)
    const isFavorite = isStatusFavorite(paramFilter)
    const isDeleted = isStatusDeleted(paramFilter)
    const isArchived = isStatusArchived(paramFilter)

    return { paramFilter, isAll, isActive, isFavorite, isDeleted, isArchived }
}
