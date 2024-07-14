import { z } from 'zod'

export const KEY_FetchGoalsSlides = (userId: string) => ['KEY_FetchGoalsSlides', userId]

export const goalSlideSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    img_path: z.string(),
    created_at: z.string(),
    active: z.boolean(),
})

export type IGoalSlideSchema = z.infer<typeof goalSlideSchema>

export const goalsSlidesResponseSchema = z.object({
    goals_slides: z.array(goalSlideSchema),
})

export const goalSlideFormSchema = z.object({
    id: z.string().uuid(),
    title: z.string().default(''),
    img_path: z.string(),
    created_at: z.string(),
    active: z.boolean(),
})
