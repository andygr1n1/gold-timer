import { resolveData } from '@/functions/resolveData'
import { generateTSClient } from '@/graphql/client'
import { processError } from '@/functions/processMessage'

export type IArtifactsCount = { activeNotesCount?: number; activeSprintsCount?: number; activeGoalsCount?: number }

export const query_artifactsCount = async (id: string): Promise<IArtifactsCount | null> => {
    const client = generateTSClient()

    return await resolveData<null, IArtifactsCount | null>(
        () =>
            client
                .query({
                    __name: 'query_artifactsCount',
                    notes_aggregate: {
                        __args: {
                            where: { owner_id: { _eq: id }, archived: { _eq: false }, deleted_at: { _is_null: true } },
                        },
                        aggregate: { count: true },
                    },
                    sprints_aggregate: {
                        __args: { where: { owner_id: { _eq: id } } },
                        aggregate: { count: true },
                    },
                    goals_aggregate: {
                        __args: {
                            where: { owner_id: { _eq: id }, status: { _eq: 'active' }, deleted_at: { _is_null: true } },
                        },
                        aggregate: { count: true },
                    },
                })
                .then((res) => {
                    const data = res
                    return {
                        activeNotesCount: data?.notes_aggregate.aggregate?.count || 0,
                        activeSprintsCount: data?.sprints_aggregate.aggregate?.count || 0,
                        activeGoalsCount: data?.goals_aggregate.aggregate?.count || 0,
                    }
                }),
        (e) => {
            processError(`query_artifactsCount: ${e}`)
            return null
        },
    )
}
