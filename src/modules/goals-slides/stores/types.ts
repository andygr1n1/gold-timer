import { z } from 'zod'

export const KEY_GoalsSlidesEditorStore = () => ['KEY_GoalsSlidesEditorStore']
const IGoalsSlidesEditorStoreSchema = z.object({
    open: z.boolean(),
})

export type IGoalsSlidesEditorStoreSchema = z.infer<typeof IGoalsSlidesEditorStoreSchema>
