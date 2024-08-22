import { generateTSClient } from '@/graphql/client'
import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { ICreateLabelForm, createLabelFormSchema } from './types'

export const mutation_insertNoteLabel = async ({ values: object }: { values: ICreateLabelForm }) => {
    const client = await generateTSClient()
    return await tryCatchRequest<Promise<undefined>, ICreateLabelForm | undefined>(
        () =>
            client
                .mutation({
                    __name: 'mutation_upsertAch',
                    insert_notes_labels_one: {
                        __args: {
                            object: {
                                name: object.name,
                            },
                        },
                        id: true,
                        name: true,
                    },
                })
                .then((response) => {
                    const zParse = createLabelFormSchema.parse(response.insert_notes_labels_one)
                    return zParse
                }),
        async (e) => await resolveError(e),
    )
}
