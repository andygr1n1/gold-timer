import { generateTSClient } from '@/graphql/client'
import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { type IUserProfileSchema, userProfileSchema } from '../types'

export const mutation_updateAvatar = async ({ imgPath: avatar }: { imgPath: string }) => {
    const client = await generateTSClient()

    return await tryCatchRequest<Promise<unknown>, IUserProfileSchema | Promise<unknown>>(
        () =>
            client
                .mutation({
                    __name: 'mutation_updateAvatar',
                    update_heroes: {
                        __args: {
                            where: {},
                            _set: { avatar },
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
