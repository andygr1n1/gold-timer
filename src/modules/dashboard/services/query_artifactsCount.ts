import { resolveError } from '@/helpers/tryCatchRequest'
import { generateClient } from '@/graphql/client'
import { graphql } from '@/graphql/tada'

export type IArtifactsCount = {
    activeNotesCount?: number
    activeGoalsCount?: number
    activeAchCount?: number
}

export const query_artifactsCount = async (): Promise<IArtifactsCount | undefined> => {
    try {
        const client = await generateClient()

        const query = graphql(`
            query query_artifactsCount {
                notes_aggregate(where: { archived: { _eq: false }, deleted_at: { _is_null: true } }) {
                    aggregate {
                        count
                    }
                }

                goals_aggregate(where: { status: { _eq: "active" }, deleted_at: { _is_null: true } }) {
                    aggregate {
                        count
                    }
                }

                achievements_aggregate(where: { deleted_at: { _is_null: true } }) {
                    aggregate {
                        count
                    }
                }
            }
        `)

        return await client.request(query).then((res) => {
            const data = res
            return {
                activeNotesCount: data?.notes_aggregate.aggregate?.count || 0,
                activeGoalsCount: data?.goals_aggregate.aggregate?.count || 0,
                activeAchCount: data?.achievements_aggregate.aggregate?.count || 0,
            }
        })
    } catch (e) {
        return await resolveError(e)
    }
}
