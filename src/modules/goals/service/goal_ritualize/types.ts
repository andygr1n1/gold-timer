import { IActiveGoalOptimized } from '../../interfaces/types'

export interface IFabricGoalRitualize {
    goal?: IActiveGoalOptimized | null
    coins: number | null
}

export interface IRitualizeUpdateFields {
    id: string
    ritual_id: string
    created_at: string
    finished_at: string
    ritual_power: number
}
