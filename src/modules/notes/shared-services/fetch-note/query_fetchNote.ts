import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { INoteSchema, noteSchema } from '../types'

export const query_fetchNote = async (props: { id: string | null }): Promise<INoteSchema | undefined> => {
    const { id } = props

    if (!id) return

    return await tryCatchRequest<Promise<undefined>, INoteSchema | undefined>(
        async () => {
            const client = await generateTSClient()
            return await client
                .query({
                    __name: 'query_fetchNote',
                    notes_by_pk: {
                        __args: {
                            id,
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
                    const zParse = noteSchema.parse(response.notes_by_pk)
                    return zParse
                })
        },
        async (e) => await resolveError(e),
    )
}
