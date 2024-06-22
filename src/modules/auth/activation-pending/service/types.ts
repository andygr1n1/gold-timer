import { QueryErrorSchema } from '@/services/types'
import { z } from 'zod'

const userDataSchema = z.object({
    role: z.string().nullable(),
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
