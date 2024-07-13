import { z } from 'zod'

export const userLoginSchema = z.object({
    email: z.string().trim().min(1, 'Required field').email('Invalid email format'),
    password: z.string().trim().min(1, 'Required field'),
})

export type IUserLoginSchema = z.infer<typeof userLoginSchema>

export const sessionCredentials = z.object({
    message: z.string().trim().min(1),
    accessJWT: z.string().trim().min(1),
    sessionJWT: z.string().trim().min(1),
})

export type ISessionCredentials = z.infer<typeof sessionCredentials>
