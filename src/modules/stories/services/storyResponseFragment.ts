import { graphql } from '@/graphql/tada'

export const storyResponseFragment = graphql(`
    fragment StoryFragment on stories {
        title
        img_path
        created_at
        deleted_at
        archived
        is_favorite
    }
`)
