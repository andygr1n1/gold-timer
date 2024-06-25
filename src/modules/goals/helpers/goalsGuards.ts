import { IGoalStatus, goalStatus } from '../shared-service'

export const calculateIsCompleted = (status: IGoalStatus) => {
    return status === 'completed'
}
export const isActive = (status: IGoalStatus) => {
    return status === 'active'
}

export const isFilterStateExpired = (status: IGoalStatus) => {
    return status === 'expired'
}

export const isFilterStateRitualized = (status: IGoalStatus) => {
    return status === goalStatus.ritual || status === goalStatus.ritualActive
}
export const isFilterStateActive = (status: IGoalStatus) => {
    return status === 'active'
}

export const isFilterStateCompleted = (status: IGoalStatus) => {
    return status === 'completed'
}

export const isFilterStateDeleted = (status: IGoalStatus) => {
    return status === 'deleted'
}

export const isFilterStateFavorite = (status: IGoalStatus) => {
    return status === 'favorite'
}
