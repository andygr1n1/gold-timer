import { type IArtifactStatus } from '@/services/types'
import { z } from 'zod'
import type { achResponseFr } from './fragments/achResponseFr'
import type { ResultOf } from 'gql.tada'

export const achSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    description: z.string().nullable(),
    created_at: z.string(),
    deleted_at: z.string().nullable(),
    is_favorite: z.boolean(),
    img_path: z.string().nullable(),
    archived: z.boolean(),
    freezed: z.boolean(),
    /*  */
    img_src: z.string().optional(),
    img_src_buffer: z.string().optional(),
})

export type IAch = ResultOf<typeof achResponseFr>

export type IAchEditor = z.infer<typeof achSchema>

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
    offset?: number
}
