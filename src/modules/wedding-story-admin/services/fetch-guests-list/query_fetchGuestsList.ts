import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'
import { fragment_weddingGroups } from './fragment_weddingGroups'

export const query_fetchGuestsList = async () => {
    try {
        const client = await generateClient()

        const query = graphql(
            `
                query query_fetchWeddingGroups {
                    wedding_groups(where: { deleted_at: { _is_null: true } }, order_by: [{ created_at: desc }]) {
                        ...Fragment_weddingGroups
                    }
                }
            `,
            [fragment_weddingGroups],
        )

        const data = await client.request(query).then((data) => {
            return data?.wedding_groups
        })

        return data
    } catch (e) {
        return await resolveError(e)
    }
}
