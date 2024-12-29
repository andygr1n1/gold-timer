import { graphql } from '@/api/tada'

export const goalResponseFr = graphql(`
    fragment GoalResponseFr on goals @_unmask {
        id
        created_at
        deleted_at
        finished_at
        is_favorite
        title
        slogan
        description
        status
        difficulty
        goal_ritual {
            ritual_id
            ritual_type
            ritual_power
            ritual_interval
            created_at
        }
    }
`)
