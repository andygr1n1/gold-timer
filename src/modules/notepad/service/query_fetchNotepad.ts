import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/api/client'
import { graphql } from '@/api/tada'

export const query_fetchNotepad = async ({ userId }: { userId: string }) => {
    try {
        const client = await generateClient()

        const query = graphql(`
            query query_fetchNotepad($userId: uuid!) {
                notepad_by_pk(owner_id: $userId) {
                    id
                    description
                }
            }
        `)

        return await client.request(query, { userId }).then((res) => {
            return res?.notepad_by_pk?.description
        })
    } catch (e) {
        return await resolveError(e)
    }
}
