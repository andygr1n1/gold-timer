import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'

export const query_fetchNotepadLockedStatus = async ({ userId }: { userId: string }) => {
    try {
        const client = await generateClient()

        const query = graphql(`
            query query_fetchNotepadLockedStatus($userId: uuid!) {
                notepad_by_pk(owner_id: $userId) {
                    id
                    locked
                }
            }
        `)

        const result = await client.request(query, { userId }).then((res) => {
            return res?.notepad_by_pk?.locked
        })

        return result
    } catch (e) {
        return await resolveError(e)
    }
}
