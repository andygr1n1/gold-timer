import { resolveError } from '@/helpers/tryCatchRequest'
import { generateURQLClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'

export const query_fetchNotepad = async ({ userId }: { userId: string }) => {
    const urqlClient = await generateURQLClient()

    const query = graphql(`
        query query_fetchNotepad($userId: uuid!) {
            notepad_by_pk(owner_id: $userId) {
                id
                description
            }
        }
    `)

    try {
        const result = await urqlClient.query(query, { userId }).then((res) => {
            if (res.error) throw res.error
            return res.data?.notepad_by_pk?.description
        })

        return result
    } catch (e) {
        await resolveError(e)
        return
    }
}
