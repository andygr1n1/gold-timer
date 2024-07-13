import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { IUserProfileSchema, userProfileSchema } from '../types'

export const query_fetchProfileInfo = async ({ id }: { id: string }) => {
    const client = await generateTSClient()

    return await tryCatchRequest<Promise<never>, IUserProfileSchema | undefined>(
        () =>
            client
                .query({
                    __name: 'query_fetchProfileInfo',
                    heroes_by_pk: {
                        __args: { id },
                        id: true,
                        avatar: true,
                        birthday: true,
                        email: true,
                        name: true,
                        phone: true,
                    },
                })
                .then((res) => {
                    return userProfileSchema.parse(res.heroes_by_pk)
                }),
        async (e) => await resolveError(e),
    )
}
