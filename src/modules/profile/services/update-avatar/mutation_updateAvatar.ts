import { generateClient } from '@/api/client'
import { resolveError } from '@/helpers/tryCatchRequest'
import { userProfileSchema } from '../types'
import { graphql } from '@/api/tada'

export const mutation_updateAvatar = async ({ imgPath: avatar }: { imgPath: string }) => {
    try {
        const client = await generateClient()

        const mutation = graphql(`
            mutation mutation_updateAvatar($avatar: String!) {
                update_heroes(where: {}, _set: { avatar: $avatar }) {
                    returning {
                        id
                        avatar
                        birthday
                        email
                        name
                        phone
                    }
                }
            }
        `)

        const res = await client.request(mutation, { avatar })

        return userProfileSchema.parse(res?.update_heroes?.returning?.[0])
    } catch (e) {
        return await resolveError(e)
    }
}
