import { graphql } from '@/graphql/tada'

export const storyResponseFr = graphql(`
    fragment StoryResponseFr on stories @_unmask {
        id
        title
        img_path
        created_at
        updated_at
        updated_by_user {
            name
        }
        deleted_at
        archived
        is_favorite
    }
`)
