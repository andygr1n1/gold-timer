import { resolveData } from '@/functions/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { processError } from '@/functions/processMessage'

export type IUserCoinsInfo = { coins?: number; totalRitualPower?: number; activeGoalsCount: number }

export const query_userCoinsInfo = async (id: string): Promise<IUserCoinsInfo | null> => {
    const client = generateTSClient()

    return await resolveData<null, IUserCoinsInfo | null>(
        () =>
            client
                .query({
                    __name: 'query_userCoinsInfo',
                    heroes_by_pk: {
                        __args: { id },
                        coins: true,
                        goals: {
                            __args: {
                                where: {
                                    owner_id: { _eq: id },
                                    status: { _eq: 'active' },
                                    deleted_at: { _is_null: true },
                                },
                            },
                            goal_ritual: { ritual_power: true },
                            id: true,
                        },
                    },
                })
                .then((res) => {
                    const data = res.heroes_by_pk
                    return {
                        coins: data?.coins,
                        totalRitualPower: data?.goals
                            .filter((goal) => goal.goal_ritual)
                            .reduce((acc, goal) => (acc += Number(goal.goal_ritual?.ritual_power)), 0),
                        activeGoalsCount: data?.goals.length || 0,
                    }
                }),
        (e) => {
            processError(`query_userCoinsInfo: ${e}`)
            return null
        },
    )
}
