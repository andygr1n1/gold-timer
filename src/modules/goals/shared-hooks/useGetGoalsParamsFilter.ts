import { useLocation } from 'react-router-dom'
import { IGoalStatus } from '@/modules/goals/shared-service'
import {
    isFilterStateActive,
    isFilterStateCompleted,
    isFilterStateDeleted,
    isExpiredGoalStatus,
    isFilterStateFavorite,
    isFilterStateRitualized,
} from '@/modules/goals/helpers/goalsGuards'

export const useGetGoalsParamsFilter = () => {
    const location = useLocation()
    const paramFilter: IGoalStatus = location.state?.filter

    const isActive = isFilterStateActive(paramFilter)
    const isExpired = isExpiredGoalStatus(paramFilter)
    const isRitualized = isFilterStateRitualized(paramFilter)
    const isFavorite = isFilterStateFavorite(paramFilter)
    const isCompleted = isFilterStateCompleted(paramFilter)
    const isDeleted = isFilterStateDeleted(paramFilter)

    return { paramFilter, isExpired, isActive, isRitualized, isFavorite, isCompleted, isDeleted }
}
