import { goal_status_enum_enum } from 'gold-timer-genql/lib/generated'
import { IGoalQueryTypeFilter } from '../service/types'

export const isCompleted = (status: goal_status_enum_enum) => {
    return status === 'completed'
}
export const isActive = (status: goal_status_enum_enum) => {
    return status === 'active'
}

export const isFilterStateExpired = (status: IGoalQueryTypeFilter) => {
    return status === 'expired'
}

export const isFilterStateRitualized = (status: IGoalQueryTypeFilter) => {
    return status === 'ritual'
}
export const isFilterStateActive = (status: IGoalQueryTypeFilter) => {
    return status === 'active'
}

export const isFilterStateCompleted = (status: IGoalQueryTypeFilter) => {
    return status === 'completed'
}

export const isFilterStateDeleted = (status: IGoalQueryTypeFilter) => {
    return status === 'deleted'
}

export const isFilterStateFavorite = (status: IGoalQueryTypeFilter) => {
    return status === 'favorite'
}
