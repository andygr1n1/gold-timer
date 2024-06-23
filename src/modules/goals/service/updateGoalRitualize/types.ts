import { IGoalSchema } from '../types'

export interface IFabricGoalRitualize {
    goal?: IGoalSchema | null
    coins: number | null
}

export interface IRitualizeUpdateFields {
    id: string
    ritual_id: string
    created_at: string | Date
    finished_at: string | Date
    ritual_power: number
}
