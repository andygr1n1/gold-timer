import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/graphql/client'
import { notesLabelsResponseSchema } from './types'
import { graphql } from '@/graphql/tada'

export const query_fetchNotesLabels = async () => {
    try {
        const client = await generateClient()

        const query = graphql(`
            query query_notes_labels {
                notes_labels(order_by: { created_at: desc, name: asc, rating: desc }, where: {}) {
                    id
                    name
                    rating
                }
            }
        `)

        return await client
            .request(query)
            .then((result) => (result ? notesLabelsResponseSchema.parse(result.notes_labels) : undefined))
    } catch (e) {
        return await resolveError(e)
    }
}
