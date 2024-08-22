import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { ICreateLabelForm, notesLabelsResponseSchema } from './types'

export const query_fetchNotesLabels = async () => {
    const client = await generateTSClient()

    return await tryCatchRequest<Promise<never>, ICreateLabelForm[] | undefined>(
        () =>
            client
                .query({
                    __name: 'query_fetchNotesLabels',
                    notes_labels: {
                        __args: {},
                        id: true,
                        name: true,
                    },
                })
                .then((res) => {
                    return notesLabelsResponseSchema.parse(res.notes_labels)
                }),
        async (e) => await resolveError(e),
    )
}
