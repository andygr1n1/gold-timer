import { z } from 'zod'

/*  */
/*  */
/*  */
export const goalEditorModeSchema = z.enum(['view', 'edit', 'new', 'ritual'])

export const goalEditorMode = goalEditorModeSchema.Values

export type IGoalEditorMode = z.infer<typeof goalEditorModeSchema>

/*  */
/*  */
/*  */

export const KEY_GoalEditorStore = () => ['KEY_GoalEditorStore']

const goalEditorStoreSchema = z.object({
    open: z.boolean(),
    goalEditorMode: goalEditorModeSchema.nullable(),
    goalId: z.string().nullable(),
    metadata: z
        .object({
            parentGoalId: z.string().nullable().optional(),
            parentGoalEditorMode: goalEditorModeSchema.nullable().optional(),
            viewModeRedirect: goalEditorModeSchema.nullable().optional(),
            preventRerender: z.boolean().default(false).optional(),
        })
        .optional(),
})

export type IGoalEditorStoreSchema = z.infer<typeof goalEditorStoreSchema>
