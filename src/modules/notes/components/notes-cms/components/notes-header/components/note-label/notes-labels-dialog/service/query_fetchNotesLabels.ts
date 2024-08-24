import { resolveError } from '@/helpers/tryCatchRequest'
import { generateURQLClient } from '@/graphql/client'
import { notesLabelsResponseSchema } from './types'
import { graphql } from '@/graphql/tada'

export const query_fetchNotesLabels = async () => {
    const urqlClient = await generateURQLClient()

    try {
        await urqlClient.query(
            graphql(`
                query query_notes {
                    notes {
                        id
                    }
                }
            `),
            {},
        )

        return await urqlClient
            .query(
                graphql(`
                    query query_notes_labels {
                        notes_labels {
                            id
                            name
                            rating
                        }
                    }
                `),
                {},
            )
            .then((result) => notesLabelsResponseSchema.parse(result.data?.notes_labels))
    } catch (e) {
        await resolveError(e)
    }
}
