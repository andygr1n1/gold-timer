import { z } from 'zod'

const noteTagStoreSchema = z.object({
    value: z.string(),
})

export type INoteTagStoreSchema = z.infer<typeof noteTagStoreSchema>
