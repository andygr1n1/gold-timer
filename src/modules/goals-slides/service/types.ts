import type { ResultOf } from 'gql.tada'
import { z } from 'zod'
import type { fragment_goalSlidesResponse } from './graphql/fragment_goalSlidesResponse'

export type IGoalSlide = ResultOf<typeof fragment_goalSlidesResponse>

export const goalSlideFormSchema = z.object({
    id: z.string().uuid(),
    title: z.string().default(''),
    img_path: z.string(),
    created_at: z.string(),
    active: z.boolean(),
})
