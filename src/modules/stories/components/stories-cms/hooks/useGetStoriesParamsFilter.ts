import { useLocation } from 'react-router-dom'

import { isStatusActive, isStatusAll, isStatusArchived, isStatusDeleted, isStatusFavorite } from '@/services/guards'
import { type IArtifactStatus } from '@/services/types'

export const useGetStoriesParamsFilter = () => {
    const location = useLocation()
    const paramFilter: IArtifactStatus = location.state?.filter

    const isActive = isStatusActive(paramFilter)
    const isFavorite = isStatusFavorite(paramFilter)
    const isDeleted = isStatusDeleted(paramFilter)
    const isArchived = isStatusArchived(paramFilter)
    const isAll = isStatusAll(paramFilter)

    return { paramFilter, isArchived, isActive, isFavorite, isDeleted, isAll }
}
