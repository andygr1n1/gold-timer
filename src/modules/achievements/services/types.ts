import { IArtifactStatus } from '@/services/types'
import { z } from 'zod'

export const achSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    description: z.string().nullable(),
    created_at: z.string(),
    deleted_at: z.string().nullable(),
    is_favorite: z.boolean(),
    img_path: z.string(),
    /*  */
    img_src: z.string().optional(),
    img_src_buffer: z.string().optional(),
})

export type IAchSchema = z.infer<typeof achSchema>

export const achsResponseSchema = z.object({
    achievements: z.array(achSchema),
})

export type IUseFetchAchs = {
    queryFilter: IArtifactStatus
    limit: number
    serverSearchInput: string
    userId: string
}

export type IUseFetchAchsQuery = {
    limit: number
    serverSearchInput: string
    userId: string
    offset?: number
}
