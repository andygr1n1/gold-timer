import { resolveError } from '@/helpers/tryCatchRequest'
import { generateURQLClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'
import { achResponseFr } from '../fragments/achResponseFr'

export const query_fetchAch = async ({ id }: { id: string }) => {
    try {
        const query = graphql(
            `
                query query_fetchAch($id: uuid!) {
                    achievements_by_pk(id: $id) {
                        ...AchResponseFr
                    }
                }
            `,
            [achResponseFr],
        )

        const urqlClient = await generateURQLClient()

        return await urqlClient.query(query, { id }).then(({ error, data }) => {
            if (error) throw error

            return data?.achievements_by_pk
        })
    } catch (e) {
        await resolveError(e)
        return
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
