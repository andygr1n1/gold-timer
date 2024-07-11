import { notesResponseSchema } from '../types'
import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { INoteSchema } from '@/modules/notes/shared-services/types'

export const query_activeNotes = async (props: {
    userId: string
    serverSearchInput: string
    limit: number
    offset?: number
}): Promise<INoteSchema[] | undefined> => {
    const { limit, userId, serverSearchInput, offset } = props
    return await tryCatchRequest<Promise<undefined>, INoteSchema[] | undefined>(
        async () => {
            const client = await generateTSClient()
            return await client
                .query({
                    __name: 'query_activeNotes',
                    notes: {
                        __args: {
                            limit,
                            offset,
                            order_by: [{ created_at: 'desc' }, { description: 'asc' }],
                            where: {
                                _and: [
                                    {
                                        owner_id: { _eq: userId },
                                        deleted_at: { _is_null: true },
                                        archived: { _eq: false },
                                    },
                                    {
                                        _or: serverSearchInput.length
                                            ? [
                                                  { description: { _ilike: `%${serverSearchInput}%` } },
                                                  { tag: { _ilike: `%${serverSearchInput}%` } },
                                              ]
                                            : undefined,
                                    },
                                ],
                            },
                        },
                        id: true,
                        description: true,
                        tag: true,
                        created_at: true,
                        deleted_at: true,
                        is_favorite: true,
                        archived: true,
                    },
                })
                .then((response) => {
                    const zParse = notesResponseSchema.parse(response)
                    return zParse.notes
                })
        },
        async (e) => await resolveError(e),
    )
}
