import { useLocation } from 'react-router-dom'
import { isExpiredGoalStatus, isFilterStateRitualized } from '@/modules/goals/helpers/goalsGuards'
import { isStatusActive, isStatusAll, isStatusCompleted, isStatusDeleted, isStatusFavorite } from '@/services/guards'
import { type IArtifactStatus } from '@/services/types'

export const useGetGoalsParamsFilter = () => {
    const location = useLocation()
    const paramFilter: IArtifactStatus = location.state?.filter

    const isActive = isStatusActive(paramFilter)
    const isExpired = isExpiredGoalStatus(paramFilter)
    const isRitualized = isFilterStateRitualized(paramFilter)
    const isFavorite = isStatusFavorite(paramFilter)
    const isCompleted = isStatusCompleted(paramFilter)
    const isDeleted = isStatusDeleted(paramFilter)
    const isAll = isStatusAll(paramFilter)

    return { paramFilter, isExpired, isActive, isRitualized, isFavorite, isCompleted, isDeleted, isAll }
}
