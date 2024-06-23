import { z } from 'zod'
import { userRoleSchema } from '../types'

const userSchema = z.object({
    userId: z.string().uuid().optional(),
    role: userRoleSchema,
    isLoading: z.boolean().default(true),
})

export type IUserSchema = z.infer<typeof userSchema>
