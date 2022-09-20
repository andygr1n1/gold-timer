import { DIFFICULTY_ENUM, PRIVACY_ENUM, STATUS_ENUM } from '../enums'

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
    status: STATUS_ENUM
    finished_at?: Date
    difficulty?: DIFFICULTY_ENUM
}
