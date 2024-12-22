import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/api/client'
import { graphql } from '@/api/tada'

export const mutation_notepadDescription = async (description: string) => {
    try {
        const client = await generateClient()

        const mutation = graphql(`
            mutation mutation_notepadDescription($description: String) {
                insert_notepad_one(
                    object: { description: $description }
                    on_conflict: { constraint: notepad_pkey, update_columns: [description] }
                ) {
                    description
                }
            }
        `)

        return await client.request(mutation, { description })
    } catch (e) {
        return await resolveError(e)
    }
}
