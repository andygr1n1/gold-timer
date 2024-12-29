import { graphql } from '@/api/tada'

export const storyMessagesResponseFr = graphql(`
    fragment StoryMessagesResponseFr on stories @_unmask {
        stories_messages(order_by: { created_at: desc }, where: { deleted_at: { _is_null: true } }) {
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
    }
`)
