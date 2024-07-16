import { IGoalSchema, IGoalStatus, goalStatus } from '../shared-service'

/* */

export const isCompletedGoalStatus = (status: IGoalStatus) => {
    return status === goalStatus.completed
}
export const isActiveGoalStatus = (status: IGoalStatus) => {
    return status === goalStatus.active
}

export const isExpiredGoalStatus = (status: IGoalStatus) => {
    return status === goalStatus.expired
}

export const isActiveRitualStatus = (goal: IGoalSchema) => {
    return isActiveGoalStatus(goal.status) && !!goal.goal_ritual
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
