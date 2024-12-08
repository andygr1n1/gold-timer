import { resolveError } from '@/helpers/tryCatchRequest'
import { type IUserProfileSchema, userProfileSchema } from '../types'
import { generateClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'

export const mutation_updateUserProfile = async ({ userProfile }: { userProfile: IUserProfileSchema }) => {
    try {
        const client = await generateClient()

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, email, ...props } = userProfile

        const mutation = graphql(`
            mutation mutation_updateUserProfile($userProfile: heroes_set_input!) {
                update_heroes(where: {}, _set: $userProfile) {
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

        const res = await client.request(mutation, { userProfile: props })

        return userProfileSchema.parse(res?.update_heroes?.returning?.[0])
    } catch (e) {
        return await resolveError(e)
    }
}
