import { generateTSClient } from '@/graphql/client'
import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { INoteSchema, noteSchema } from '@/modules/notes/shared-services/types'

export const mutation_updateNoteIsFavorite = async ({
    id,
    isFavorite,
}: {
    id: string
    isFavorite: boolean
}): Promise<INoteSchema | undefined> => {
    return await tryCatchRequest<Promise<undefined>, INoteSchema | undefined>(
        async () => {
            const client = await generateTSClient()
            return await client
                .mutation({
                    __name: 'mutation_updateNoteIsFavorite',
                    update_notes_by_pk: {
                        __args: {
                            pk_columns: { id },
                            _set: { is_favorite: isFavorite },
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
                    const zParse = noteSchema.parse(response.update_notes_by_pk)
                    return zParse
                })
        },
        async (e) => await resolveError(e),
    )
}
