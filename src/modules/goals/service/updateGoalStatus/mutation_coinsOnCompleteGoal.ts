import { resolveData } from '@/helpers/tryCatchRequest'
import { processError } from '@/helpers/processMessage'
import { Client } from 'gold-timer-genql/lib/generated'
import { getUserCoins, getUserId } from '@/helpers/getUserData'
import { IGoal, IGoalQueryTypeFilter } from '../types'
import { getCoinsFromCompletedGoal } from '@/helpers/getCoinsFromCompletedGoal'

export const mutation_coinsOnCompleteGoal = async (
    client: Client,
    goal: IGoal,
    status: IGoalQueryTypeFilter,
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
