import { goal_status_enum_enum } from 'gold-timer-genql/lib/generated'
import { GOAL_STATUS_ENUM } from '@/helpers/enums'
import { IGoalQueryTypeFilter } from '../service/types'

export const isCompleted = (status: goal_status_enum_enum) => {
    return status === GOAL_STATUS_ENUM.COMPLETED
}
export const isActive = (status: goal_status_enum_enum) => {
    return status === GOAL_STATUS_ENUM.ACTIVE
}

export const isFilterStateExpired = (status: IGoalQueryTypeFilter) => {
    return status === 'expired'
}

export const isFilterStateRitualized = (status: IGoalQueryTypeFilter) => {
    return status === 'ritual'
}
export const isFilterStateFavorite = (status: IGoalQueryTypeFilter) => {
    return status === 'favorite'
}
