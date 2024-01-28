import { fetchData } from '@/functions/fetchData'
import { generateTSClient } from '@/graphql/client'
import { processError } from '@/functions/processMessage'
import { GOAL_STATUS_ENUM } from '@/lib/enums'

export type IUserCoinsInfo = { coins?: number; totalRitualPower?: number; activeGoalsCount: number }

export const query_userCoinsInfo = async (id: string): Promise<IUserCoinsInfo | null> => {
    const client = generateTSClient()

    return await fetchData<null, IUserCoinsInfo | null>(
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
                                    status: { _eq: GOAL_STATUS_ENUM.ACTIVE },
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
