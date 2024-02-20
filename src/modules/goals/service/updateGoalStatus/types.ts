import { goal_status_enum_enum } from 'gold-timer-genql/lib/generated'

export interface IGoalStatus {
    id?: string
    status: goal_status_enum_enum
}
export interface IFabricGoalStatus {
    status: IGoalStatus | null
    coins: number | null
}
