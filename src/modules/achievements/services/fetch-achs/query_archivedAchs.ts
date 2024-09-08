import { graphql } from '@/graphql/tada'
import { type IAch, type IUseFetchAchsQuery } from '../types'
import { resolveError } from '@/helpers/tryCatchRequest'
import { achResponseFr } from '../fragments/achResponseFr'
import { generateURQLClient } from '@/graphql/client'

export const query_archivedAchs = async ({
    limit,
    serverSearchInput,
    offset,
}: IUseFetchAchsQuery): Promise<IAch[] | undefined> => {
    try {
        const query = graphql(
            `
                query query_archivedAchs($limit: Int, $offset: Int, $title: String) {
                    achievements(
                        limit: $limit
                        offset: $offset
                        order_by: { created_at: desc, description: asc }
                        where: {
                            _and: [
                                {
                                    _or: { title: { _ilike: $title }, description: { _ilike: $title } }
                                    deleted_at: { _is_null: true }
                                    archived: { _eq: true }
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
