import { z } from 'zod'

const profileStoreSchema = z.object({
    editProfile: z.boolean(),
    editPassword: z.boolean(),
})

export type IProfile$ = z.infer<typeof profileStoreSchema>
