import { generateTSClient } from '@/graphql/client'
import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { IAchSchema, achSchema } from '../types'
import { getQueryFields } from '../getQueryFields'

export const mutation_updateAchDeletedAt = async ({
    id,
    deletedAt: deleted_at,
}: {
    id: string
    deletedAt: string | null
}): Promise<IAchSchema | undefined> => {
    return await tryCatchRequest<Promise<undefined>, IAchSchema | undefined>(
        async () => {
            const client = await generateTSClient()
            const fields = getQueryFields()
            return await client
                .mutation({
                    __name: 'mutation_updateAchDeletedAt',
                    update_achievements_by_pk: {
                        __args: {
                            pk_columns: { id },
                            _set: { deleted_at },
                        },
                        ...fields,
                    },
                })
                .then((response) => {
                    const zParse = achSchema.parse(response.update_achievements_by_pk)
                    return zParse
                })
        },
        async (e) => await resolveError(e),
    )
}
