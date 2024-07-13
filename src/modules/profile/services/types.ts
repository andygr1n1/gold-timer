import { z } from 'zod'

export const userProfileSchema = z.object({
    id: z.string().uuid(),
    birthday: z.string().nullable(),
    email: z.string(),
    name: z.string(),
    phone: z.string(),
    avatar: z.string(),
})

export type IUserProfileSchema = z.infer<typeof userProfileSchema>


export const userProfilePasswordSchema = z.object({
    email: z.string().min(1),
    password: z.string().min(1),
    newPassword: z.string().min(1),
    repeatNewPassword: z.string().min(1),
})



export type IUserProfilePasswordSchema = z.infer<typeof userProfilePasswordSchema>