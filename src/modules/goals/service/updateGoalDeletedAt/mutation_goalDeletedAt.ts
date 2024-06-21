import { resolveData } from '@/helpers/tryCatchRequest'
import { generateTSClient } from '@/graphql/client'
import { processError } from '@/helpers/processMessage'

interface IGoalStatus {
    id: string
    deleted_at: string | null
}

export const mutation_goalDeletedAt = async (goal_id: string, deleted_at: boolean): Promise<IGoalStatus | null> => {
    const client = generateTSClient()

    return await resolveData<null, IGoalStatus | null>(
        () =>
            client
                .mutation({
                    __name: 'mutation_goalDeletedAt',
                    update_goals_by_pk: {
                        __args: {
                            pk_columns: { id: goal_id },
                            _set: { deleted_at: deleted_at ? 'now()' : null },
                        },
                        id: true,
                        deleted_at: true,
                    },
                })
                .then((res) => {
                    return res.update_goals_by_pk
                }),
        (e) => {
            processError(`mutation_goalDeletedAt: ${e}`)
            return null
        },
    )
}
