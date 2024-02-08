import { setZeroTime } from '@/functions/date.helpers'
import { getUserId } from '@/functions/universalCookie.helper'
import { Client } from '@/graphql/generated'
import { GOAL_STATUS_ENUM } from '@/lib/enums'

export const query_activeGoals = (client: Client, active = true, limit?: number) => {
    return (
        active &&
        client.query({
            __name: 'query_activeGoals',
            goals: {
                __args: {
                    limit,
                    order_by: [{ finished_at: 'asc' }],
                    where: {
                        owner_id: { _eq: getUserId() },
                        deleted_at: { _is_null: true },
                        status: { _eq: GOAL_STATUS_ENUM.ACTIVE },
                        // not ritual
                        _not: { goal_ritual: {} },
                        // not expired
                        finished_at: { _gte: setZeroTime(new Date(Date.now())) },
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
