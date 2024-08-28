import { generateTSClient } from '@/graphql/client'
import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { getQueryFields } from '../getQueryFields'
import { type IAchSchema, achSchema } from '../types'

export const mutation_updateAchIsFavorite = async ({
    id,
    isFavorite,
}: {
    id: string
    isFavorite: boolean
}): Promise<IAchSchema | undefined> => {
    return await tryCatchRequest<Promise<undefined>, IAchSchema | undefined>(
        async () => {
            const client = await generateTSClient()
            const fields = getQueryFields()
            return await client
                .mutation({
                    __name: 'mutation_updateAchIsFavorite',
                    update_achievements_by_pk: {
                        __args: {
                            pk_columns: { id },
                            _set: { is_favorite: isFavorite },
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
