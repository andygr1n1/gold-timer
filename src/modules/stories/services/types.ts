import type { ResultOf } from 'gql.tada'
import { z } from 'zod'
import type { storyMessageInsertFr } from './fragments/storyMessageInsertFr'
import type { storyResponseFr } from './fragments/storyResponseFr'

export const newStorySchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    img_path: z.string().optional().nullable(),
    /*  */
    img_src: z.string().optional(),
    img_src_buffer: z.string().optional(),
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


export type IStoryMessage = ResultOf<typeof storyMessageInsertFr>
export type IStory = ResultOf<typeof storyResponseFr>
