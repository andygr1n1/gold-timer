import { generateClient } from '@/api/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { type ICreateLabelForm, createLabelFormSchema } from './types'
import { graphql } from '@/api/tada'

export const mutation_insertNoteLabel = async ({ values: object }: { values: ICreateLabelForm }) => {
    try {
        const client = await generateClient()

        const mutation = graphql(`
            mutation mutation_insertNoteLabel($object: notes_labels_insert_input!) {
                insert_notes_labels_one(object: $object) {
                    id
                    name
                }
            }
        `)

        const res = await client.request(mutation, {
            object: {
                name: object.name.toLowerCase(),
            },
        })

        return createLabelFormSchema.parse(res.insert_notes_labels_one)
    } catch (e) {
        return await resolveError(e)
    }
}
