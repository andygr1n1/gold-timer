import { resolveData } from '@/functions/resolveData'
import { generateTSClient } from '@/graphql/client'
import { processError } from '@/functions/processMessage'
import { heroes } from '@/graphql/generated'

type IHero = Pick<heroes, 'name' | 'avatar'>

export const query_baseUserInfo = async (id: string): Promise<IHero | null> => {
    const client = generateTSClient()

    return await resolveData<null, IHero | null>(
        () =>
            client
                .query({
                    __name: 'query_baseUserInfo',
                    heroes_by_pk: {
                        __args: { id },
                        name: true,
                        avatar: true,
                    },
                })
                .then((res) => res.heroes_by_pk),
        (e) => {
            processError(`query_baseUserInfo: ${e}`)
            return null
        },
    )
}
