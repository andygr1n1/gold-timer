import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/api/client'
import { graphql } from '@/api/tada'
import { achResponseFr } from '../fragments/achResponseFr'

export const query_fetchAch = async ({ id }: { id: string }) => {
    try {
        const query = graphql(
            `
                query query_fetchAch($id: uuid!) {
                    achievements_by_pk(id: $id) {
                        ...AchResponseFr
                    }
                }
            `,
            [achResponseFr],
        )

        const client = await generateClient()

        const data = await client.request(query, { id })

        return data?.achievements_by_pk
    } catch (e) {
        return await resolveError(e)
    }
}
