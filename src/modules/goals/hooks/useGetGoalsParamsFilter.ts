import { useLocation } from 'react-router-dom'
import { IGoalQueryTypeFilter } from '@/modules/goals/service'
import {
    isFilterStateActive,
    isFilterStateCompleted,
    isFilterStateDeleted,
    isFilterStateExpired,
    isFilterStateFavorite,
    isFilterStateRitualized,
} from '@/modules/goals/helpers/goalsGuards'

export const useGetGoalsParamsFilter = () => {
    const location = useLocation()
    const paramFilter: IGoalQueryTypeFilter = location.state?.filter

    const isActive = isFilterStateActive(paramFilter)
    const isExpired = isFilterStateExpired(paramFilter)
    const isRitualized = isFilterStateRitualized(paramFilter)
    const isFavorite = isFilterStateFavorite(paramFilter)
    const isCompleted = isFilterStateCompleted(paramFilter)
    const isDeleted = isFilterStateDeleted(paramFilter)

    return { paramFilter, isExpired, isActive, isRitualized, isFavorite, isCompleted, isDeleted }
}
