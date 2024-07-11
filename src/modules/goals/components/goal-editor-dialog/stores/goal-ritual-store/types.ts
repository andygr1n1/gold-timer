import { z } from 'zod'

export const KEY_GoalRitualStore = () => ['KEY_GoalRitualStore']

const goalRitualStoreSchema = z.object({
    ritualize: z.boolean().default(false),
})

export type IGoalRitualSchema = z.infer<typeof goalRitualStoreSchema>
