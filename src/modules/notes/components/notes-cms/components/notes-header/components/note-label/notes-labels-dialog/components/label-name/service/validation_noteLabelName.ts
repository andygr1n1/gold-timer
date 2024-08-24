import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { ICreateLabelForm, notesLabelsResponseSchema } from '../../../service/types'

export const validation_noteLabelName = async ({ value }: { value: string }) => {
    return await tryCatchRequest<Promise<undefined>, ICreateLabelForm[] | undefined>(
        async () => {
            const client = await generateTSClient()

            return await client
                .query({
                    __name: 'validation_noteLabelName',
                    notes_labels: { __args: { where: { name: { _eq: value.toLowerCase() } } }, id: true, name: true },
                })
                .then((response) => {
                    const zParse = notesLabelsResponseSchema.parse(response.notes_labels)
                    return zParse
                })
        },
        async (e) => await resolveError(e),
    )
}
