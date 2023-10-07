import { RITUAL_TYPE_ENUM } from '@/helpers/enums'
import { DIFFICULTY_ENUM, PRIVACY_ENUM, GOAL_STATUS_ENUM } from '../enums'

export interface IGenerateGoalCommonValues {
    Title: string
    Slogan: string
    Description: string
    Freeze: boolean
    Privacy: PRIVACY_ENUM
}

export interface IGenerateGoalWithDays extends IGenerateGoalCommonValues {
    Days: number
    FinishDate: never
}

export interface IGenerateGoalWithDate extends IGenerateGoalCommonValues {
    Days: never
    FinishDate: Date
}

export type IGenerateGoalValues = IGenerateGoalWithDays | IGenerateGoalWithDate

// IInsertNewGoal
export interface IInsertNewGoal {
    title: string
    slogan: string
    description: string
    owner_id: string
    privacy: PRIVACY_ENUM
    status: GOAL_STATUS_ENUM
    finished_at?: Date
    difficulty?: DIFFICULTY_ENUM
    parent_goal_id: string | null
    is_favorite: boolean
}

// IUpsertNewGoal
export interface IUpsertNewGoal {
    id: string
    title: string
    slogan: string
    description: string
}

export interface IInsertRitual {
    goal_id: string
    ritual_power: number
    ritual_interval: number
    ritual_type: RITUAL_TYPE_ENUM
    ritual_id?: string
}
