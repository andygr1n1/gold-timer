import { z } from 'zod'

const userSchema = z.object({
    userId: z.string().uuid().optional(),
    role: z.enum(['hero', 'superHero']).optional(),
    storeId: z.string().uuid(),
    isLoading: z.boolean().default(true),
})

export type IUserSchema = z.infer<typeof userSchema>
