import { getUserId } from '@/functions/universalCookie.helper'
import { Client } from '@/graphql/generated'

export const query_ritualGoals = (client: Client, ritual = true, limit?: number) => {
    return (
        ritual &&
        client.query({
            __name: 'query_ritualGoals',
            goals: {
                __args: {
                    limit,
                    order_by: [{ finished_at: 'asc' }],
                    where: {
                        owner_id: { _eq: getUserId() },
                        deleted_at: { _is_null: true },
                        // not ritual
                        goal_ritual: { ritual_power: { _gt: 0 } },
                    },
                },
                id: true,
                title: true,
                created_at: true,
                finished_at: true,
                is_favorite: true,
                goal_ritual: {
                    ritual_power: true,
                },
                status: true,
                difficulty: true,
            },
        })
    )
}
