import { z } from 'zod'

export const userRegisterSchema = z.object({
    name: z.string().trim().min(1, 'Required field'),
    email: z.string().trim().min(1, 'Required field').email('Invalid email format'),
    password: z.string().trim().min(1, 'Required field'),
    passwordRepeat: z.string().trim().min(1, 'Required field'),
})

export type IUserRegisterSchema = z.infer<typeof userRegisterSchema>
