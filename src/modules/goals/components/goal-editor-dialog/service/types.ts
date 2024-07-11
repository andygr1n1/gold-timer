import { z } from 'zod'

export const KEY_FetchGoal = (goalId: string | null) => ['KEY_FetchGoal', goalId]

const updateGoalRitualSchema = z.object({
    goal_id: z.string().uuid(),
    ritual_id: z.string().uuid(),
    ritual_power: z.number(),
    created_at: z.string().nullable(),
    finished_at: z.string().nullable(),
})

export type IUpdateGoalRitualSchema = z.infer<typeof updateGoalRitualSchema>
