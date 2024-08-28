import { generateTSClient } from '@/graphql/client'
import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { type INoteSchema, noteSchema } from './types'
import { getQueryFields } from './getQueryFields'

export const mutation_updateNoteDeletedAt = async ({
    id,
    deletedAt: deleted_at,
}: {
    id: string
    deletedAt: string | null
}): Promise<INoteSchema | undefined> => {
    return await tryCatchRequest<Promise<undefined>, INoteSchema | undefined>(
        async () => {
            const client = await generateTSClient()
            const fields = getQueryFields()
            return await client
                .mutation({
                    __name: 'mutation_updateNoteDeletedAt',
                    update_notes_by_pk: {
                        __args: {
                            pk_columns: { id },
                            _set: { deleted_at },
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
