import { IGoalQueryTypeFilter } from "../types"

export interface IGoalStatus {
    id?: string
    status: IGoalQueryTypeFilter
}
export interface IFabricGoalStatus {
    status: IGoalStatus | null
    coins: number | null
}
