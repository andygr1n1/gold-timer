import { QueryErrorSchema } from '@/helpers'
import { z } from 'zod'

const userDataSchema = z.object({
    activated: z.boolean(),
    name: z.string(),
    email: z.string().email(),
})

export type IUserData = z.infer<typeof userDataSchema>

const userDataServiceSchema = z.object({
    isLoading: z.boolean(),
    error: QueryErrorSchema.nullable(),
    user: userDataSchema.optional().nullable(),
    resendActivationLink: z.function().args().returns(z.void()).optional(),
})

export type IUserDataService = z.infer<typeof userDataServiceSchema>
