import { goals, goals_rituals, Scalars } from 'gold-timer-genql/lib/generated'
import { z } from 'zod'
import { DIFFICULTY_ENUM, RITUAL_TYPE_ENUM } from '@/services/enums'

export type IGoalQueryTypeFilter = 'active' | 'ritual' | 'expired' | 'favorite' | 'completed' | 'deleted' | 'all'

type IGoalRitualOptimized = Partial<Omit<goals_rituals, 'ritual_power' | 'ritual_interval' | 'ritual_type'>> & {
    ritual_interval: Scalars['Int']
    ritual_power: Scalars['Int']
    ritual_type: RITUAL_TYPE_ENUM
}

export type IGoal = Partial<
    Omit<goals, 'goal_ritual' | 'title' | 'finished_at' | 'id' | 'is_favorite' | 'slogan' | 'created_at' | 'deleted_at'>
> & {
    id: string
    title: string
    slogan?: string
    finished_at: string
    goal_ritual?: IGoalRitualOptimized
    is_favorite?: boolean
    status: IGoalQueryTypeFilter
    created_at: string
    deleted_at?: string | null
}

// IInsertNewGoal
export interface IInsertNewGoal {
    id?: string
    title: string
    slogan?: string
    description?: string
    owner_id: string
    status?: IGoalQueryTypeFilter
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

export type IActiveGoals = {
    isLoading: boolean
    isFetching?: boolean
    data: Partial<{
        [key in IGoalQueryTypeFilter]: IGoal[]
    }>
}

// Define the schema for goal_ritual
const goalRitualSchema = z.object({
    ritual_id: z.string().uuid(),
    ritual_type: z.string(),
    ritual_power: z.number(),
    ritual_interval: z.number(),
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
    status: z.string(),
    difficulty: z.string(),
    goal_ritual: goalRitualSchema.nullable(),
})

export type IGoalSchema = z.infer<typeof goalSchema>

export const goalsResponseSchema = z.object({
    goals: z.array(goalSchema),
})

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
