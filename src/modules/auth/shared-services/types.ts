import { z } from "zod"

export const baseAuthSchema = z.object({
    name: z.string().trim().min(1, 'Required field'),
    email: z.string().trim().min(1, 'Required field').email('Invalid email format'),
    password: z.string().trim().min(1, 'Required field'),
    passwordRepeat: z.string().trim().min(1, 'Required field'),
})

export type IBaseAuthSchema = z.infer<typeof baseAuthSchema>
