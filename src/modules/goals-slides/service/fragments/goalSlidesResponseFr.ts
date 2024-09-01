import { graphql } from '@/graphql/tada'

export const goalSlidesResponseFr = graphql(`
    fragment GoalSlidesResponseFr on goals_slides @_unmask {
        id
        img_path
        active
        title
        created_at
    }
`)
