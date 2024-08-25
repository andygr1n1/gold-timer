import { z } from 'zod'

/*  */
/*  */
/*  */
export const editorModeSchema = z.enum(['edit', 'new', 'view'])

export const editorMode = editorModeSchema.Values

export type INoteEditorMode = z.infer<typeof editorModeSchema>

/*  */
/*  */
/*  */

const noteEditorStoreSchema = z.object({
    open: z.boolean(),
    editorMode: editorModeSchema.nullable(),
    id: z.string().nullable(),
    metadata: z
        .object({
            parentGoalEditorMode: editorModeSchema.nullable().optional(),
            viewModeRedirect: editorModeSchema.nullable().optional(),
            preventRerender: z.boolean().default(false).optional(),
        })
        .optional(),
})

export type INoteEditorStoreSchema = z.infer<typeof noteEditorStoreSchema>
