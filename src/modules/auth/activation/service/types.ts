import { z } from 'zod'

export const verifyActivationCode = z.object({
    message: z.string().optional(),
    sessionInfo: z.object({ accessJWT: z.string() }),
})

export type IVerifyActivationCode = z.infer<typeof verifyActivationCode>
