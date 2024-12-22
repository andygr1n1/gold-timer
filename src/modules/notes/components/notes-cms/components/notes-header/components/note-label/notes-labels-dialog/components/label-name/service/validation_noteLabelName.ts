import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/api/client'
import { notesLabelsResponseSchema } from '../../../service/types'
import { graphql } from '@/api/tada'

export const validation_noteLabelName = async ({ value }: { value: string }) => {
    try {
        const client = await generateClient()

        const query = graphql(`
            query validation_noteLabelName($where: notes_labels_bool_exp) {
                notes_labels(where: $where, limit: 1) {
                    id
                    name
                }
            }
        `)

        const response = await client.request(query, { where: { name: { _eq: value.toLowerCase() } } })

        return notesLabelsResponseSchema.parse(response.notes_labels)
    } catch (e) {
        return await resolveError(e)
    }
}
