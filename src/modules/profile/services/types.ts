import { z } from 'zod'

export const userProfileSchema = z.object({
    id: z.string().uuid(),
    birthday: z.string().nullable(),
    email: z.string(),
    name: z.string(),
    phone: z.string().nullable(),
    avatar: z.string().nullable(),
})

export type IUserProfileSchema = z.infer<typeof userProfileSchema>


export const userProfilePasswordSchema = z.object({
    email: z.string().min(1),
    password: z.string().min(1),
    newPassword: z.string().min(1),
    repeatNewPassword: z.string().min(1),
})



export type IUserProfilePasswordSchema = z.infer<typeof userProfilePasswordSchema>
export const updateAvatarFormSchema = z.object({
    imgSrc: z.string().optional(),
})



export type IUpdateAvatarFormSchema = z.infer<typeof updateAvatarFormSchema>