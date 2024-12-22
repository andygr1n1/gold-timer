import { graphql } from '@/api/tada'

export const noteResponseFr = graphql(`
    fragment NoteResponseFr on notes @_unmask {
        id
        description
        tag
        created_at
        deleted_at
        is_favorite
        archived
        label_id
        label {
            name
        }
    }
`)
