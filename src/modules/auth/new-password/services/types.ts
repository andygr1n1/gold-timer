import { z } from 'zod'

export const userNewPasswordSchema = z.object({
    restoreCode: z.string().trim().min(1, 'Required field').nullable(),
    password: z.string().trim().min(1, 'Required field'),
    passwordRepeat: z.string().trim().min(1, 'Required field'),
})

export type IUserNewPasswordSchema = z.infer<typeof userNewPasswordSchema>
