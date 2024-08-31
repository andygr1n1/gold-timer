import { graphql } from '@/graphql/tada'

export const storyMessagesResponseFragment = graphql(`
    fragment StoryMessagesFragment on stories @_unmask {
        stories_messages(order_by: { created_at: desc }, where: { deleted_at: { _is_null: true } }) {
            id
            description
            img_path
            active_by_user
            created_at
            updated_at
            created_by
            updated_by
        }
    }
`)
