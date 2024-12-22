import { graphql } from '@/api/tada'

export const achResponseFr = graphql(`
    fragment AchResponseFr on achievements @_unmask {
        id
        title
        img_path
        created_at
        updated_at
        deleted_at
        archived
        is_favorite
        description
        freezed
    }
`)
