import { z } from 'zod'

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
    deleted_at: z.string().nullable(),
    archived: z.boolean(),
    is_favorite: z.boolean(),
})

export type IStorySchema = z.infer<typeof storySchema>

export const storiesResponseSchema = z.array(storySchema)
