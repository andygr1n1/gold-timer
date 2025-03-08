import { graphql } from '@/api/tada'
export const fragment_weddingGroups = graphql(`
    fragment Fragment_weddingGroups on wedding_groups @_unmask {
        id
        name
        registration
        booking_number
        hide
        solo
        wedding_guests {
            id
            first_name
            last_name
            email
            phone
            more_info
            accepted
            table
        }
    }
`)
