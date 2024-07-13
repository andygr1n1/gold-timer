import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { IUserProfileSchema, userProfileSchema } from '../types'
import { generateTSClient } from '@/graphql/client'

export const mutation_updateUserProfile = async ({ userProfile }: { userProfile: IUserProfileSchema }) => {
    const client = await generateTSClient()

    const { id, email, ...props } = userProfile

    return await tryCatchRequest<Promise<unknown>, IUserProfileSchema | Promise<unknown>>(
        () =>
            client
                .mutation({
                    __name: 'mutation_updateUserProfile',
                    update_heroes: {
                        __args: {
                            where: { id: { _eq: id }, email: { _eq: email } },
                            _set: { ...props },
                        },
                        returning: {
                            id: true,
                            avatar: true,
                            birthday: true,
                            email: true,
                            name: true,
                            phone: true,
                        },
                    },
                })
                .then((res) => {
                    return userProfileSchema.parse(res?.update_heroes?.returning?.[0])
                }),
        async (e) => await resolveError(e),
    )
}
