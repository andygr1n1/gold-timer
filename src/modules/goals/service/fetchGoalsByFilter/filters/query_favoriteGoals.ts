import { getUserId } from '@/functions/universalCookie.helper'
import { Client } from '@/graphql/generated'

export const query_favoriteGoals = (client: Client, favorite = true, limit?: number, offset?: number) => {
    return (
        favorite &&
        client.query({
            __name: 'query_favoriteGoals',
            goals: {
                __args: {
                    limit,
                    offset,
                    order_by: [{ finished_at: 'asc' }],
                    where: {
                        owner_id: { _eq: getUserId() },
                        // deleted_at: { _is_null: true },
                        is_favorite: { _eq: true },
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
