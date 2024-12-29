import { graphql } from '@/api/tada'
import { type IAch, type IUseFetchAchsQuery } from '../types'
import { resolveError } from '@/helpers/tryCatchRequest'
import { achResponseFr } from '../fragments/achResponseFr'
import { generateClient } from '@/api/client'

export const query_favoriteAchs = async ({
    limit,
    serverSearchInput,
    offset,
}: IUseFetchAchsQuery): Promise<IAch[] | undefined> => {
    try {
        const query = graphql(
            `
                query query_favoriteAchs($limit: Int, $offset: Int, $title: String) {
                    achievements(
                        limit: $limit
                        offset: $offset
                        order_by: { created_at: desc, description: asc }
                        where: {
                            _and: [
                                {
                                    _or: { title: { _ilike: $title }, description: { _ilike: $title } }
                                    is_favorite: { _eq: true }
                                }
                            ]
                        }
                    ) {
                        ...AchResponseFr
                    }
                }
            `,
            [achResponseFr],
        )

        const client = await generateClient()

        const data = await client.request(query, { limit, offset, title: '%' + serverSearchInput + '%' })

        return data?.achievements
    } catch (e) {
        return await resolveError(e)
    }
}
