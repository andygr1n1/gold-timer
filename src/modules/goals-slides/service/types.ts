import type { ResultOf } from 'gql.tada'
import { z } from 'zod'
import type { fragment_goalSlidesResponse } from './graphql/fragment_goalSlidesResponse'

export const goalSlideSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    img_path: z.string(),
    created_at: z.string(),
    active: z.boolean(),
})

export type IGoalSlide = ResultOf<typeof fragment_goalSlidesResponse>

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
