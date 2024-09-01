import { graphql } from '@/graphql/tada'

export const storyMessageResponseFr = graphql(`
    fragment StoryMessageResponseFr on stories_messages @_unmask {
        id
        description
        img_path
        active_by_user
        created_at
        updated_at
        created_by
        updated_by
        updated_by_user {
            avatar
            name
        }
        story {
            users
        }
    }
`)
