import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'
import { fragment_weddingGroups } from './fragment_weddingGroups'

export const query_fetchGuestsList = async () => {
    try {
        const client = await generateClient()

        const query = graphql(
            `
                query query_fetchWeddingGroups {
                    wedding_groups(order_by: [{ created_at: desc }]) {
                        ...Fragment_weddingGroups
                    }
                }
            `,
            [fragment_weddingGroups],
        )

        const data = await client.request(query).then((data) => {
            return data?.wedding_groups
        })

        return data
    } catch (e) {
        return await resolveError(e)
    }
}

// import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
// import { generateTSClient } from '@/graphql/client'
// import { type IAch, achSchema } from '../types'
// import { getQueryFields } from '../getQueryFields'

// export const query_fetchAch = async (props: { id: string | null }): Promise<IAch | undefined> => {
//     const { id } = props

//     if (!id) return

//     return await tryCatchRequest<Promise<undefined>, IAch | undefined>(
//         async () => {
//             const client = await generateTSClient()
//             const fields = getQueryFields()
//             return await client
//                 .query({
//                     __name: 'query_fetchAch',
//                     achievements_by_pk: {
//                         __args: {
//                             id,
//                         },
//                         ...fields,
//                     },
//                 })
//                 .then((response) => {
//                     const zParse = achSchema.parse(response.achievements_by_pk)
//                     return zParse
//                 })
//         },
//         async (e) => await resolveError(e),
//     )
// }
