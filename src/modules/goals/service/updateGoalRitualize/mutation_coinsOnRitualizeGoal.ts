import { resolveData } from '@/functions/tryCatchRequest'
import { processError } from '@/functions/processMessage'
import { Client } from 'gold-timer-genql/lib/generated'
import { getUserCoins, getUserId } from '@/functions/getUserData'
import { IGoal } from '../types'
import { getCoinsFromRitual } from '@/functions/getCoinsFromRitual'

export const mutation_coinsOnRitualizeGoal = async (client: Client, goal: IGoal): Promise<number | null> => {
    const coins = getCoinsFromRitual(goal.goal_ritual?.ritual_power || 0 + 1, getUserCoins())

    return await resolveData<null, number | null>(
        () =>
            client
                .mutation({
                    __name: 'mutation_coinsOnRitualizeGoal',
                    update_heroes_by_pk: {
                        __args: {
                            pk_columns: { id: getUserId() },
                            _set: { coins },
                        },
                        id: true,
                        coins: true,
                    },
                })
                .then((res) => {
                    return res.update_heroes_by_pk?.coins || null
                }),
        (e) => {
            processError(`mutation_coinsOnRitualizeGoal: ${e}`)
            return null
        },
    )
}
