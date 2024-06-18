import { z } from 'zod'

// Define the schema for the response
export const verifyActivationCode = z.object({
    message: z.string().optional(),
    sessionInfo: z.object({ accessId: z.string() }),
})

export type IVerifyActivationCode = z.infer<typeof verifyActivationCode>
