import { resolveData } from '@/functions/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { processError } from '@/functions/processMessage'
import { heroes } from 'gold-timer-genql/lib/generated'
import { getUserId } from '@/functions/getUserData'

type IHero = Pick<heroes, 'name' | 'avatar'>

export const query_fetchAvatar = async (): Promise<IHero | null> => {
    const client = generateTSClient()

    return await resolveData<null, IHero | null>(
        () =>
            client
                .query({
                    __name: 'useFetchAvatar',
                    heroes_by_pk: {
                        __args: { id: getUserId() },
                        name: true,
                        avatar: true,
                    },
                })
                .then((res) => res.heroes_by_pk),
        (e) => {
            processError(`useFetchAvatar: ${e}`)
            return null
        },
    )
}
