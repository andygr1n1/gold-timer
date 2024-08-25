import { notesResponseSchema } from '../types'
import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { INoteSchema } from '@/modules/notes/shared-services/types'
import { getQueryFields } from '../getQueryFields'

export const query_activeNotes = async (props: {
    userId: string
    serverSearchInput: string
    limit: number
    offset?: number
    label?: string
}): Promise<INoteSchema[] | undefined> => {
    const { limit, userId, serverSearchInput, offset, label } = props
    return await tryCatchRequest<Promise<undefined>, INoteSchema[] | undefined>(
        async () => {
            const client = await generateTSClient()
            const fields = getQueryFields()
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
                                        label_id: label ? { _eq: label } : undefined,
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
                        ...fields,
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
