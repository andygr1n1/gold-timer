import { graphql } from '@/graphql/tada'
import { fragment_weddingGuest } from './fragment_weddingGuest'
export const fragment_weddingGroups = graphql(
    `
        fragment Fragment_weddingGroups on wedding_groups @_unmask {
            id
            name
            registration
            booking_number
            hide
            wedding_guests {
                ...Fragment_weddingGuest
            }
        }
    `,
    [fragment_weddingGuest],
)
