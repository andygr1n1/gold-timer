import { generateTSClient } from '../../../graphql/client'
import { processError } from '@/functions/processMessage'
import { getOwnerId } from '@/functions/getUserId'
import { resolveData } from '@/functions/resolveData'
import type { achievements } from 'gold-timer-genql/lib/generated'

export const query_fetchAchievements = async (): Promise<Partial<achievements>[] | undefined> => {
    const client = generateTSClient()

    return await resolveData<Partial<achievements>[], Partial<achievements>[]>(
        () =>
            client
                .query({
                    __name: 'query_fetchAchievements',
                    achievements: {
                        __args: { order_by: [{ created_at: 'desc' }], where: { owner_id: { _eq: getOwnerId() } } },
                        id: true,
                        img_path: true,
                        title: true,
                        visible: true,
                        description: true,
                        created_at: true,
                    },
                })
                .then((res) => res.achievements),
        (e) => {
            processError(`query_fetchAchievements: ${e}`)
            return []
        },
    )
}
