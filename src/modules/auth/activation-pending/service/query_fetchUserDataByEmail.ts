import { generateTSClient } from '@/graphql/client'
import type { IUserData } from './types'
import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'

export const query_fetchUserDataByEmail = async (email?: string | null): Promise<IUserData | undefined | null> => {
    const client = await generateTSClient()
    const __name = 'query_fetchUserDataByEmail'

    return await tryCatchRequest<Promise<undefined>, IUserData | null>(
        async () =>
            client
                .query({
                    __name,
                    heroes: {
                        __args: { where: { email: { _eq: email } } },
                        email: true,
                        name: true,
                        role: true,
                    },
                })
                .then((res) => {
                    return res?.heroes?.[0] || null
                }),
        async (e) => await resolveError(e),
    )
}
