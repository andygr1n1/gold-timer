import { notesResponseSchema } from '../types'
import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/graphql/client'
import { type INoteSchema } from '@/modules/notes/shared-services/types'
import { graphql } from '@/graphql/tada'
import { noteResponseFr } from '../fragments/noteResponseFr'

export const query_favoriteNotes = async (props: {
    userId: string
    serverSearchInput: string
    limit: number
    offset?: number
    label?: string
}): Promise<INoteSchema[] | undefined> => {
    const { limit, serverSearchInput, offset, label } = props

    try {
        const client = await generateClient()

        const query = graphql(
            `
                query query_favoriteNotes(
                    $serverSearchInput: String!
                    $limit: Int!
                    $offset: Int
                    $label_id: uuid_comparison_exp
                ) {
                    notes(
                        limit: $limit
                        offset: $offset
                        order_by: [{ created_at: desc }, { description: asc }]
                        where: {
                            _and: [
                                { is_favorite: { _eq: true } }
                                { deleted_at: { _is_null: true } }
                                { label_id: $label_id }
                                {
                                    _or: [
                                        { description: { _ilike: $serverSearchInput } }
                                        { tag: { _ilike: $serverSearchInput } }
                                    ]
                                }
                            ]
                        }
                    ) {
                        ...NoteResponseFr
                    }
                }
            `,
            [noteResponseFr],
        )

        const res = await client.request(query, {
            limit,
            serverSearchInput: `%${serverSearchInput}%`,
            offset,
            label_id: label ? { _eq: label } : {},
        })
        return notesResponseSchema.parse(res).notes
    } catch (e) {
        return await resolveError(e)
    }
}
