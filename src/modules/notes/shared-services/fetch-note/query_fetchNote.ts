import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { INoteSchema, noteSchema } from '../types'
import { getQueryFields } from '../getQueryFields'

export const query_fetchNote = async (props: { id: string | null }): Promise<INoteSchema | undefined> => {
    const { id } = props

    if (!id) return

    return await tryCatchRequest<Promise<undefined>, INoteSchema | undefined>(
        async () => {
            const client = await generateTSClient()
            const fields = getQueryFields()
            return await client
                .query({
                    __name: 'query_fetchNote',
                    notes_by_pk: {
                        __args: {
                            id,
                        },
                        ...fields,
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
