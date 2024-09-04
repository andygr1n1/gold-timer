import { resolveError } from '@/helpers/tryCatchRequest'
import { generateURQLClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'

export const query_fetchNotepadLockedStatus = async ({ userId }: { userId: string }) => {
    const urqlClient = await generateURQLClient()

    const query = graphql(`
        query query_fetchNotepadLockedStatus($userId: uuid!) {
            notepad_by_pk(owner_id: $userId) {
                id
                locked
            }
        }
    `)

    try {
        const result = await urqlClient.query(query, { userId }).then((res) => {
            if (res.error) throw res.error
            return res.data?.notepad_by_pk?.locked
        })

        return result
    } catch (e) {
        await resolveError(e)
        return
    }
}
