import { processError } from '@/functions/processMessage'
import { resolveData } from '@/functions/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'

export const query_verifyUserId = async (userId: string): Promise<string> => {
    const client = generateTSClient()
    console.log('hey there->>>', userId)
    return await resolveData<string, string>(
        () =>
            client
                .query({
                    __name: 'xxxxx',
                    heroes_by_pk: {
                        __args: { id: userId },
                        id: true,
                    },
                })
                .then((res) => {
                    return res.heroes_by_pk?.id
                }),
        (e) => {
            processError(`xxxxx: ${e}`)
            return ''
        },
    )
}
