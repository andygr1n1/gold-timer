import { generateTSClient } from '../../../graphql/client'
import { resolveError, tryCatchRequest } from '@/helpers/tryCatchRequest'
import type { achievements } from 'gold-timer-genql/lib/generated'

export const query_fetchAchievements = async ({
    userId,
}: {
    userId: string
}): Promise<Partial<achievements>[] | undefined> => {
    const client = await generateTSClient()

    return await tryCatchRequest<Promise<never>, Partial<achievements>[]>(
        () =>
            client
                .query({
                    __name: 'query_fetchAchievements',
                    achievements: {
                        __args: { order_by: [{ created_at: 'desc' }], where: { owner_id: { _eq: userId } } },
                        id: true,
                        img_path: true,
                        title: true,
                        description: true,
                        created_at: true,
                    },
                })
                .then((res) => res.achievements),
        async (e) => await resolveError(e),
    )
}
