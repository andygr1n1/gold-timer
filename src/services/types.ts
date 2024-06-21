import { z } from 'zod'

export const QueryErrorSchema = z.object({
    message: z.string(),
    name: z.string(),
    stack: z.string().optional(),
})

export type QueryError = z.infer<typeof QueryErrorSchema>

/*  */
