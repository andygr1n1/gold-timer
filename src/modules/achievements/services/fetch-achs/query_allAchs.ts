import { graphql } from '@/graphql/tada'
import { type IAch, type IUseFetchAchsQuery } from '../types'
import { resolveError } from '@/helpers/tryCatchRequest'
import { achResponseFr } from '../fragments/achResponseFr'
import { generateURQLClient } from '@/graphql/client'

export const query_allAchs = async ({
    limit,
    serverSearchInput,
    offset,
}: IUseFetchAchsQuery): Promise<IAch[] | undefined> => {
    try {
        const query = graphql(
            `
                query query_allAchs($limit: Int, $offset: Int, $title: String) {
                    achievements(
                        limit: $limit
                        offset: $offset
                        order_by: { created_at: desc, description: asc }
                        where: { _or: { title: { _ilike: $title }, description: { _ilike: $title } } }
                    ) {
                        ...AchResponseFr
                    }
                }
            `,
            [achResponseFr],
        )

        const urqlClient = await generateURQLClient()

        return await urqlClient
            .query(query, { limit, offset, title: '%' + serverSearchInput + '%' })
            .then(({ error, data }) => {
                if (error) throw error

                return data?.achievements
            })
    } catch (e) {
        await resolveError(e)
        return
    }
}
