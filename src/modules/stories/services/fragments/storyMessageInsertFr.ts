import { graphql } from '@/graphql/tada'

export const storyMessageInsertFr = graphql(`
    fragment StoryMessageInsertFr on stories_messages @_unmask {
        id
        description
        img_path
        active_by_user
        created_at
        updated_at
        created_by
        updated_by
    }
`)
