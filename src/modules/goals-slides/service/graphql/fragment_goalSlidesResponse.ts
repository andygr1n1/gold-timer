import { graphql } from '@/graphql/tada'

export const fragment_goalSlidesResponse = graphql(`
    fragment GoalSlidesResponseFr on goals_slides @_unmask {
        id
        img_path
        active
        title
        created_at
    }
`)
