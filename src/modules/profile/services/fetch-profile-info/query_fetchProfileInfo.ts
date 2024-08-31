import { resolveError } from '@/helpers/tryCatchRequest'
import { generateURQLClient } from '@/graphql/client'
import { userProfileSchema } from '../types'
import { graphql } from '@/graphql/tada'

export const query_fetchProfileInfo = async ({ id }: { id: string }) => {
    const client = await generateURQLClient()
    try {
        const result = await client
            .query(
                graphql(`
                    query query_fetchProfileInfo($id: uuid!) {
                        heroes_by_pk(id: $id) {
                            id
                            avatar
                            birthday
                            email
                            name
                            phone
                        }
                    }
                `),
                { id },
                { requestPolicy: 'network-only' },
            )
            .then((res) => res.data && userProfileSchema.parse(res.data.heroes_by_pk))

        return result
    } catch (e) {
        await resolveError(e)
        return
    }
}
