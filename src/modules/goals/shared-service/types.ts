import { z } from 'zod'

/*  */
/*  */
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
    'all',
    'frozen',
])

export const goalStatusEnum = goalStatusSchema.Values

export type IGoalStatus = z.infer<typeof goalStatusSchema>

export const GOAL_STATUSES: IGoalStatus[] = [goalStatusEnum.active, goalStatusEnum.completed]

/*  */
/*  */
/*  */
export const goalRitualTypeSchema = z.enum(['interval_in_days', 'days_of_week'])

export const goalRitualType = goalRitualTypeSchema.Values

export type IGoalRitualType = z.infer<typeof goalRitualTypeSchema>

/*  */
/*  */
/*  */

const goalRitualSchema = z.object({
    ritual_id: z.string().uuid(),
    ritual_type: goalRitualTypeSchema,
    ritual_power: z.number(),
    ritual_interval: z.number(),
    created_at: z.string().nullable(),
})

export type IGoalRitualSchema = z.infer<typeof goalRitualSchema>

/*  */
/*  */
/*  */

export const goalSchema = z.object({
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
    parent_goal_id: z.string().uuid().nullable().optional(),
})

export type IGoalSchema = z.infer<typeof goalSchema>

export const goalsResponseSchema = z.object({
    goals: z.array(goalSchema),
})
