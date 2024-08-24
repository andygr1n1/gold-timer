import { z } from 'zod'

export const noteStatusSchema = z.enum(['active', 'favorite', 'archived', 'deleted', 'all'])

export const noteStatus = noteStatusSchema.Values

export type INoteStatus = z.infer<typeof noteStatusSchema>

export const noteSchema = z.object({
    id: z.string().uuid(),
    description: z.string(),
    tag: z.string().nullable(),
    created_at: z.string(),
    deleted_at: z.string().nullable(),
    is_favorite: z.boolean(),
    archived: z.boolean(),
    label_id: z.string().uuid().nullable(),
    label: z
        .object({
            name: z.string(),
        })
        .nullable(),
})

export type INoteSchema = z.infer<typeof noteSchema>

export const notesResponseSchema = z.object({
    notes: z.array(noteSchema),
})
