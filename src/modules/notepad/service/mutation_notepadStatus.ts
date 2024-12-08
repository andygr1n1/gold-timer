import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'

export const mutation_notepadStatus = async ({
    locked,
    userId,
}: {
    locked: boolean
    userId: string
}): Promise<boolean> => {
    try {
        const client = await generateClient()

        const mutation = graphql(`
            mutation mutation_notepadStatus($locked: Boolean!, $owner_id: uuid!) {
                update_notepad_by_pk(pk_columns: { owner_id: $owner_id }, _set: { locked: $locked }) {
                    locked
                }
            }
        `)

        const res = await client.request(mutation, {
            locked,
            owner_id: userId,
        })

        return res.update_notepad_by_pk?.locked || false
    } catch (e) {
        await resolveError(e)
        return false
    }
}
