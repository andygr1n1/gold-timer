import { z } from 'zod'
import { DIFFICULTY_ENUM, RITUAL_TYPE_ENUM } from '@/services/enums'

// IInsertNewGoal
export interface IInsertNewGoal {
    id?: string
    title: string
    slogan?: string
    description?: string
    owner_id: string
    status?: IGoalStatus
    finished_at: string | Date
    difficulty?: DIFFICULTY_ENUM
    parent_goal_id?: string | null
    is_favorite?: boolean
    deleted_at?: Date | null
}

export interface IInsertRitual {
    goal_id?: string
    ritual_power?: number
    ritual_interval?: number
    ritual_typ?: RITUAL_TYPE_ENUM
    ritual_id?: string
}

/*  */
// ritualActive - ritual goals, excluding expired rituals
export const goalStatusSchema = z.enum([
    'active',
    'completed',
    'ritual',
    'ritualActive',
    'expired',
    'favorite',
    'completed',
    'deleted',
])
export const goalStatus = goalStatusSchema.Values
export type IGoalStatus = z.infer<typeof goalStatusSchema>

export const GOAL_STATUSES: IGoalStatus[] = [goalStatus.active, goalStatus.completed]

/*  */

// Define the schema for goal_ritual
const goalRitualSchema = z.object({
    ritual_id: z.string().uuid(),
    ritual_type: z.string(),
    ritual_power: z.number(),
    ritual_interval: z.number(),
    created_at: z.string().nullable(),
})

// Define the schema for the goals
const goalSchema = z.object({
    id: z.string().uuid(),
    created_at: z.string(),
    deleted_at: z.string().nullable(),
    finished_at: z.string().nullable(),
    is_favorite: z.boolean(),
    title: z.string(),
    slogan: z.string(),
    description: z.string(),
    status: goalStatusSchema,
    difficulty: z.string(),
    goal_ritual: goalRitualSchema.nullable(),
})

export type IGoalSchema = z.infer<typeof goalSchema>

export const goalsResponseSchema = z.object({
    goals: z.array(goalSchema),
})
