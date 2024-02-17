import { setZeroTime } from '@/functions/date.helpers'
import { getUserId } from '@/functions/universalCookie.helper'
import { Client } from '@/graphql/generated'

export const query_expiredGoals = (client: Client, expired = true, limit?: number, offset?: number) => {
    return (
        expired &&
        client.query({
            __name: 'query_expiredGoals',
            goals: {
                __args: {
                    limit,
                    offset,
                    order_by: [{ finished_at: 'asc' }],
                    where: {
                        owner_id: { _eq: getUserId() },
                        deleted_at: { _is_null: true },
                        // not ritual
                        _not: { goal_ritual: {} },
                        // not expired
                        finished_at: { _lt: setZeroTime(new Date(Date.now())) },
                    },
                },
                id: true,
                title: true,
                created_at: true,
                finished_at: true,
                is_favorite: true,
                status: true,
                difficulty: true,
            },
        })
    )
}
