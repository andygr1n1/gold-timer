import { resolveError } from '@/helpers/tryCatchRequest'
import { generateURQLClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'

export const mutation_notepadDescription = async (description: string) => {
    try {
        const urqlClient = await generateURQLClient()

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

        const { data, error } = await urqlClient.mutation(mutation, { description })

        if (error) throw error

        return data
    } catch (e) {
        await resolveError(e)
        return
    }
}
