import { resolveData } from '@/functions/resolveData'
import { processError } from '@/functions/processMessage'
import { Client, goal_status_enum_enum } from 'gold-timer-genql/lib/generated'
import { IGoal } from '../types'
import { IGoalStatus } from './types'

export const mutation_goalStatus = async (
    client: Client,
    goal: IGoal,
    status: goal_status_enum_enum,
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
                    return res.update_goals_by_pk
                }),
        (e) => {
            processError(`mutation_goalStatus: ${e}`)
            return null
        },
    )
}
