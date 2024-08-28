import { generateTSClient } from '@/graphql/client'
import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { type INoteSchema, noteSchema } from '@/modules/notes/shared-services/types'
import { getQueryFields } from './getQueryFields'

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
            const fields = getQueryFields()
            return await client
                .mutation({
                    __name: 'mutation_updateNoteIsFavorite',
                    update_notes_by_pk: {
                        __args: {
                            pk_columns: { id },
                            _set: { is_favorite: isFavorite },
                        },
                        ...fields,
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
