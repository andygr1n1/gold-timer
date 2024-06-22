import { z } from 'zod'

export const userRestoreSchema = z.object({
    email: z.string().email(),
})

export type IUserRestoreSchema = z.infer<typeof userRestoreSchema>
