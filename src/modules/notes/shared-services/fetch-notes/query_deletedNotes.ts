import { notesResponseSchema } from '../types'
import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/graphql/client'
import { type INoteSchema } from '@/modules/notes/shared-services/types'
import { graphql } from '@/graphql/tada'
import { noteResponseFr } from '../fragments/noteResponseFr'

export const query_deletedNotes = async (props: {
    userId: string
    serverSearchInput: string
    limit: number
    offset?: number
    label?: string
}): Promise<INoteSchema[] | undefined> => {
    try {
        const { limit, serverSearchInput, offset, label } = props
        const client = await generateClient()

        const query = graphql(
            `
                query query_deletedNotes(
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
                                { deleted_at: { _is_null: false } }
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

        const data = await client.request(query, {
            serverSearchInput: `%${serverSearchInput}%`,
            limit,
            offset,
            label_id: label ? { _eq: label } : {},
        })

        return notesResponseSchema.parse(data).notes
    } catch (e) {
        return await resolveError(e)
    }
}
