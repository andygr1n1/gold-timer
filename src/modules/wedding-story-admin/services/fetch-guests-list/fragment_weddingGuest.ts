import { graphql } from '@/api/tada'

export const fragment_weddingGuest = graphql(`
    fragment Fragment_weddingGuest on wedding_guests @_unmask {
        id
        first_name
        last_name
        email
        phone
        more_info
        accepted
        table
    }
`)
