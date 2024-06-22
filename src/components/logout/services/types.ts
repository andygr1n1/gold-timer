import { z } from 'zod'

export const sessionLogout = z.object({
    message: z.string().trim().min(1),
})

export type ISessionLogout = z.infer<typeof sessionLogout>
