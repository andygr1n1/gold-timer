import { resolveData } from '@/functions/resolveData'
import { processError } from '@/functions/processMessage'
import { Client } from '@/graphql/generated'
import { IGoalStatus } from './types'

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
                    return res.update_goals_by_pk
                }),
        (e) => {
            processError(`mutation_goalStatus: ${e}`)
            return null
        },
    )
}
