import { goalStatusSchema } from '@/modules/goals/shared-service'
import { z } from 'zod'

export const KEY_useGoalsFiltersStore = () => ['KEY_useGoalsFiltersStore']

const foalsFiltersSchema = z.object({
    searchInput: z.string(),
    serverSearchInput: z.string(),
    status: goalStatusSchema,
})

export type IGoalsFiltersSchema = z.infer<typeof foalsFiltersSchema>
