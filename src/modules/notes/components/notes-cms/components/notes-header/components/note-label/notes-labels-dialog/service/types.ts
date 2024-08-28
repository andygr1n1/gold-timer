import { z } from 'zod'

export const createLabelFormSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    duplicateName: z.boolean().optional().default(false),
    rating: z.number().nullable().optional(),
})

export type ICreateLabelForm = z.infer<typeof createLabelFormSchema>

export const notesLabelsResponseSchema = z.array(createLabelFormSchema)
