import { resolveData } from '@/functions/resolveData'
import { processError } from '@/functions/processMessage'
import { Client, goal_status_enum_enum } from 'gold-timer-genql/lib/generated'
import { getUserCoins, getUserId } from '@/functions/getUserData'
import { IGoal } from '../types'
import { getCoinsFromCompletedGoal } from '@/functions/getCoinsFromCompletedGoal'

export const mutation_coinsOnCompleteGoal = async (
    client: Client,
    goal: IGoal,
    status: goal_status_enum_enum,
): Promise<number | null> => {
    if (status === 'active') return null

    const coins = getCoinsFromCompletedGoal(goal, getUserCoins())

    return await resolveData<null, number | null>(
        () =>
            client
                .mutation({
                    __name: 'mutation_coinsOnCompleteGoal',
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
            processError(`mutation_coinsOnCompleteGoal: ${e}`)
            return null
        },
    )
}
