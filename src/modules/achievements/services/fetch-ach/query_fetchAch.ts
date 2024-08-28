import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { type IAchSchema, achSchema } from '../types'
import { getQueryFields } from '../getQueryFields'

export const query_fetchAch = async (props: { id: string | null }): Promise<IAchSchema | undefined> => {
    const { id } = props

    if (!id) return

    return await tryCatchRequest<Promise<undefined>, IAchSchema | undefined>(
        async () => {
            const client = await generateTSClient()
            const fields = getQueryFields()
            return await client
                .query({
                    __name: 'query_fetchAch',
                    achievements_by_pk: {
                        __args: {
                            id,
                        },
                        ...fields,
                    },
                })
                .then((response) => {
                    const zParse = achSchema.parse(response.achievements_by_pk)
                    return zParse
                })
        },
        async (e) => await resolveError(e),
    )
}
