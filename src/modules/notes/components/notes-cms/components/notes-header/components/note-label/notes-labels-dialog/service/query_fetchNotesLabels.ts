import { resolveError } from '@/helpers/tryCatchRequest'
import { generateURQLClient } from '@/graphql/client'
import { notesLabelsResponseSchema } from './types'
import { graphql } from '@/graphql/tada'

export const query_fetchNotesLabels = async () => {
    const urqlClient = await generateURQLClient()

    try {
        return await urqlClient
            .query(
                graphql(`
                    query query_notes_labels {
                        notes_labels(order_by: { created_at: desc, name: asc, rating: desc }, where: {}) {
                            id
                            name
                            rating
                        }
                    }
                `),
                {},
                // { requestPolicy: 'cache-and-network' },
            )
            .then((result) => (result.data ? notesLabelsResponseSchema.parse(result.data?.notes_labels) : undefined))
    } catch (e) {
        await resolveError(e)
        return
    }
}
