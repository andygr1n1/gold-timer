import { generateClient } from '@/api/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { type INoteSchema, noteSchema } from '@/modules/notes/shared-services/types'
import { graphql } from '@/api/tada'
import { noteResponseFr } from '../fragments/noteResponseFr'

export const mutation_upsertNote = async (props: { note: INoteSchema }) => {
    try {
        const client = await generateClient()

        const {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            note: { label, ...object },
        } = props

        const insertToneMutation = graphql(
            `
                mutation mutation_upsertNote($object: notes_insert_input!) {
                    insert_notes_one(
                        object: $object
                        on_conflict: { constraint: tasks_pkey, update_columns: [description, tag, label_id] }
                    ) {
                        ...NoteResponseFr
                    }
                }
            `,
            [noteResponseFr],
        )

        const insertNoteRes = await client
            .request(insertToneMutation, {
                object,
            })
            .then((response) => {
                const zParse = noteSchema.parse(response.insert_notes_one)
                return zParse
            })

        const updateNoteLabelMutation = graphql(`
            mutation Mutation_updateNoteLabelRating($id: uuid!) {
                update_notes_labels_by_pk(pk_columns: { id: $id }, _inc: { rating: 1 }) {
                    id
                    name
                    owner_id
                    rating
                }
            }
        `)

        object.label_id && (await client.request(updateNoteLabelMutation, { id: object.label_id }))

        return insertNoteRes
    } catch (e) {
        return await resolveError(e)
    }
}
