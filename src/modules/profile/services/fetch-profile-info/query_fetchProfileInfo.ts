import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/api/client'
import { userProfileSchema } from '../types'
import { graphql } from '@/api/tada'

export const query_fetchProfileInfo = async ({ id }: { id: string }) => {
    try {
        const client = await generateClient()

        const query = graphql(`
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
        `)

        return await client.request(query, { id }).then((res) => res && userProfileSchema.parse(res.heroes_by_pk))
    } catch (e) {
        return await resolveError(e)
    }
}
