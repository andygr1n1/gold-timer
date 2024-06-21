import { z } from 'zod'

export const verifyActivationCode = z.object({
    message: z.string().optional(),
    sessionInfo: z.object({ accessId: z.string() }),
})

export type IVerifyActivationCode = z.infer<typeof verifyActivationCode>
