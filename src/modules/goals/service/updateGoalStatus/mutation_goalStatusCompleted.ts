import { resolveData } from '@/helpers/tryCatchRequest'
import { processError } from '@/helpers/processMessage'
import { Client } from 'gold-timer-genql/lib/generated'
import { IGoalStatus } from './types'
import { IGoal } from '../types'

export const mutation_goalStatusCompleted = async (client: Client, id: string): Promise<IGoalStatus | null> => {
    return await resolveData<null, IGoalStatus | null>(
        () =>
            client
                .mutation({
                    __name: 'mutation_goalStatus',
                    update_goals_by_pk: {
                        __args: {
                            pk_columns: { id },
                            _set: { status: 'completed', finished_at: 'now()' },
                        },
                        id: true,
                        status: true,
                    },
                })
                .then((res) => {
                    return res.update_goals_by_pk as IGoal
                }),
        (e) => {
            processError(`mutation_goalStatus: ${e}`)
            return null
        },
    )
}
