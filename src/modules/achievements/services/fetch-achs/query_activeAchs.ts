import { resolveError } from '@/helpers/tryCatchRequest'
import { generateURQLClient } from '@/graphql/client'
import { type IUseFetchAchsQuery } from '../types'
import { graphql } from '@/graphql/tada'
import { achResponseFr } from '../fragments/achResponseFr'

export const query_activeAchs = async ({ limit, serverSearchInput, offset }: IUseFetchAchsQuery) => {
    try {
        const query = graphql(
            `
                query query_activeAchs($limit: Int, $offset: Int, $title: String) {
                    achievements(
                        limit: $limit
                        offset: $offset
                        order_by: { created_at: desc, description: asc }
                        where: {
                            _and: [
                                {
                                    _or: { title: { _ilike: $title }, description: { _ilike: $title } }
                                    deleted_at: { _is_null: true }
                                    archived: { _eq: false }
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
