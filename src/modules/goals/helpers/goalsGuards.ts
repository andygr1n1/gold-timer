import { goal_status_enum_enum } from '@/graphql/generated'
import { GOAL_STATUS_ENUM } from '@/lib/enums'
import { IGoalQueryTypeFilter } from '../service/types'

export const isCompleted = (status: goal_status_enum_enum) => {
    return status === GOAL_STATUS_ENUM.COMPLETED
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
