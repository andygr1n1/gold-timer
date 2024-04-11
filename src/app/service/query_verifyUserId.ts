import { getUserId } from '@/functions/getUserData'
import { processError } from '@/functions/processMessage'
import { resolveData } from '@/functions/resolveData'
import { generateTSClient } from '@/graphql/client'

export const query_verifyUserId = async (): Promise<string> => {
    const client = generateTSClient()

    const userId = getUserId()

    if (!userId) return ''

    return await resolveData<string, string>(
        () =>
            client
                .query({
                    __name: 'query_verifyUserId',
                    heroes_by_pk: {
                        __args: { id: userId },
                        id: true,
                    },
                })
                .then((res) => {
                    return res.heroes_by_pk?.id
                }),
        (e) => {
            processError(`query_verifyUserId: ${e}`)
            return ''
        },
    )
}
