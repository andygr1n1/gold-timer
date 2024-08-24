import { generateTSClient, generateURQLClient } from '@/graphql/client'
import { graphql } from 'gql.tada'
import { resolveError } from '@/helpers/tryCatchRequest'
import { INoteSchema, noteSchema } from '@/modules/notes/shared-services/types'
import { getQueryFields } from '../getQueryFields'

export const mutation_upsertNote = async (props: { note: INoteSchema }) => {
    const client = await generateTSClient()
    const urqlClient = await generateURQLClient()
    const fields = getQueryFields()

    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        note: { label, ...rest },
    } = props

    try {
        const insertNote = await client
            .mutation({
                __name: 'mutation_upsertNote',
                insert_notes_one: {
                    __args: {
                        object: { ...rest },
                        on_conflict: {
                            constraint: 'tasks_pkey',
                            update_columns: ['description', 'tag', 'label_id'],
                        },
                    },
                    ...fields,
                },
            })
            .then((response) => {
                const zParse = noteSchema.parse(response.insert_notes_one)
                return zParse
            })

        await urqlClient.mutation(
            graphql(`
                mutation Mutation_updateNoteLabelRating($id: uuid!) {
                    update_notes_labels_by_pk(pk_columns: { id: $id }, _inc: { rating: 1 }) {
                        id
                        name
                        owner_id
                        rating
                    }
                }
            `),
            { id: rest.label_id },
        )

        return insertNote
    } catch (e) {
        await resolveError(e)
    }
}
