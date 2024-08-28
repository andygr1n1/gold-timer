import { type IAchSchema, type IUseFetchAchsQuery, achsResponseSchema } from '../types'
import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { getQueryFields } from '../getQueryFields'

export const query_deletedAchs = async ({
    limit,
    userId,
    serverSearchInput,
    offset,
}: IUseFetchAchsQuery): Promise<IAchSchema[] | undefined> => {
    return await tryCatchRequest<Promise<undefined>, IAchSchema[] | undefined>(
        async () => {
            const client = await generateTSClient()
            const fields = getQueryFields()
            return await client
                .query({
                    __name: 'query_deletedAchs',
                    achievements: {
                        __args: {
                            limit,
                            offset,
                            order_by: [{ created_at: 'desc' }, { description: 'asc' }],
                            where: {
                                _and: [
                                    {
                                        owner_id: { _eq: userId },
                                        deleted_at: { _is_null: false },
                                    },
                                    {
                                        _or: serverSearchInput.length
                                            ? [
                                                  { description: { _ilike: `%${serverSearchInput}%` } },
                                                  { title: { _ilike: `%${serverSearchInput}%` } },
                                              ]
                                            : undefined,
                                    },
                                ],
                            },
                        },
                        ...fields,
                    },
                })
                .then((response) => {
                    const zParse = achsResponseSchema.parse(response)
                    return zParse.achievements
                })
        },
        async (e) => await resolveError(e),
    )
}
