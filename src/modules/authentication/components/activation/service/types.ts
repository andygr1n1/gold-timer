import { z } from 'zod'

// Define the schema for the response
export const verifyActivationCode = z.object({
    userId: z.string().nonempty('User ID cannot be empty'),
    jwt: z.string().nonempty('JWT cannot be empty'),
})

export type IVerifyActivationCode = z.infer<typeof verifyActivationCode>

export const activationCodeSchema = z.object({
    activationCode: z.string().nonempty('Activation code cannot be empty'),
})
