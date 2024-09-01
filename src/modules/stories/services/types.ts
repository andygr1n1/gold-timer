import type { ResultOf } from 'gql.tada'
import { z } from 'zod'
import type { storyResponseFr } from './fragments/storyResponseFr'
import type { storyMessageResponseFr } from './fragments/storyMessageResponseFr'

export const newStorySchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    img_path: z.string().optional().nullable(),
    /*  */
    img_src: z.string().optional(),
    img_src_buffer: z.string().optional(),
    img_path_delete: z.string().optional(),
})

export type INewStorySchema = z.infer<typeof newStorySchema>

export const storySchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    img_path: z.string().nullable(),
    created_at: z.string(),
    updated_at: z.string(),
    deleted_at: z.string().nullable(),
    archived: z.boolean(),
    is_favorite: z.boolean(),
})

export type IStoryMessage = ResultOf<typeof storyMessageResponseFr>
export type IStory = ResultOf<typeof storyResponseFr>
