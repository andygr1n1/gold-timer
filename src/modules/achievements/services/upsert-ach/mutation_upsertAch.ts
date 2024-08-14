import { generateTSClient } from '@/graphql/client'
import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { IAchSchema, achSchema } from '../types'
import { getQueryFields } from '../getQueryFields'

export const mutation_upsertAch = async ({ values: object }: { values: IAchSchema }) => {
    const client = await generateTSClient()
    const fields = getQueryFields()
    return await tryCatchRequest<Promise<undefined>, IAchSchema | undefined>(
        () =>
            client
                .mutation({
                    __name: 'mutation_upsertAch',
                    insert_achievements_one: {
                        __args: {
                            object: {
                                img_path: object.img_path,
                                id: object.id,
                                title: object.title,
                                description: object.description,
                                is_favorite: object.is_favorite,
                            },
                            on_conflict: {
                                constraint: 'achievements_pkey',
                                update_columns: ['description', 'img_path', 'title', 'is_favorite'],
                            },
                        },
                        ...fields,
                    },
                })
                .then((response) => {
                    const zParse = achSchema.parse(response.insert_achievements_one)
                    return zParse
                }),
        async (e) => await resolveError(e),
    )
}
