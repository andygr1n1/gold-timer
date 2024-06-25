import { z } from "zod"

export const KEY_GoalEditorStore = () => ['KEY_GoalEditorStore']

const goalEditorStoreSchema = z.object({
    open: z.boolean(),
    edit: z.boolean(),
    goalId: z.string().nullable(),
})

export type IGoalEditorStoreSchema = z.infer<typeof goalEditorStoreSchema>
