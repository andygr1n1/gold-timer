import { type IArtifactStatus } from '@/services/types'
import { type IGoalSchema, type IGoalStatus, goalStatusEnum } from '../shared-service'

export const isCompletedGoalStatus = (status: IGoalStatus) => {
    return status === goalStatusEnum.completed
}
export const isActiveGoalStatus = (status: IGoalStatus) => {
    return status === goalStatusEnum.active
}

export const isExpiredGoalStatus = (status: IArtifactStatus) => {
    return status === goalStatusEnum.expired
}

export const isActiveRitualStatus = (goal: IGoalSchema) => {
    return isActiveGoalStatus(goal.status) && !!goal.goal_ritual
}

export const isFilterStateRitualized = (status: IArtifactStatus) => {
    return status === goalStatusEnum.ritual || status === goalStatusEnum.ritualActive
}
