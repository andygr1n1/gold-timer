import type { ResultOf } from 'gql.tada'
import { z } from 'zod'
import type { goalSlidesResponseFr } from './fragments/goalSlidesResponseFr'

export const KEY_FetchGoalsSlides = (userId?: string) => ['KEY_FetchGoalsSlides', userId]

export const goalSlideSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    img_path: z.string(),
    created_at: z.string(),
    active: z.boolean(),
})

export type IGoalSlide = ResultOf<typeof goalSlidesResponseFr>

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
