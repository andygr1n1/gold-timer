import { generateTSClient } from '@/graphql/client'
import { IUserData } from './types'
import { tryCatchRequest } from '@/functions/tryCatchRequest'

export const query_fetchUserDataByEmail = async (email?: string | null): Promise<IUserData | null> => {
    const client = generateTSClient()
    const __name = 'query_fetchUserDataByEmail'

    return await tryCatchRequest<null, IUserData | null>(() =>
        client
            .query({
                __name,
                heroes: {
                    __args: { where: { email: { _eq: email } } },
                    email: true,
                    name: true,
                    activated: true,
                },
            })
            .then((res) => {
                return res?.heroes?.[0] || null
            }),
    )
}
