import { resolveData } from '@/helpers/tryCatchRequest'
import { processError } from '@/helpers/processMessage'
import { Client } from 'gold-timer-genql/lib/generated'
import { IGoal, IGoalQueryTypeFilter } from '../types'
import { IGoalStatus } from './types'

export const mutation_goalStatus = async (
    client: Client,
    goal: IGoal,
    status: IGoalQueryTypeFilter,
): Promise<IGoalStatus | null> => {
    return await resolveData<null, IGoalStatus | null>(
        () =>
            client
                .mutation({
                    __name: 'mutation_goalStatus',
                    update_goals_by_pk: {
                        __args: {
                            pk_columns: { id: goal.id },
                            _set: { status },
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
