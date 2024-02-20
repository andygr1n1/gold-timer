import { setZeroTime } from '@/functions/date.helpers'
import { getUserId } from '@/functions/universalCookie.helper'
import { Client } from 'gold-timer-genql/lib/generated'
import { GOAL_STATUS_ENUM } from '@/lib/enums'
import { filterGoalAtom } from '@/modules/goals/stores/filterGoal.store'
import { selectedGoalAtom$ } from '@/modules/goals/stores/selectedGoal.store'

export const query_activeGoals = (props: {
    client: Client
    queryIsActive: boolean
    limit?: number
    offset?: number
    filterByText: boolean
}) => {
    const { client, queryIsActive = true, limit, offset, filterByText } = props

    const searchText = selectedGoalAtom$.get(filterGoalAtom)?.search

    return (
        queryIsActive &&
        client.query({
            __name: 'query_activeGoals',
            goals: {
                __args: {
                    limit,
                    offset,
                    order_by: [{ finished_at: 'asc' }],
                    where: {
                        _and: [
                            {
                                owner_id: { _eq: getUserId() },
                                deleted_at: { _is_null: true },
                                status: { _eq: GOAL_STATUS_ENUM.ACTIVE },
                                // not ritual
                                _not: { goal_ritual: {} },
                                // not expired
                                finished_at: { _gte: setZeroTime(new Date(Date.now())) },
                            },
                            {
                                _or: filterByText
                                    ? [
                                          {
                                              title: { _ilike: `%${searchText}%` },
                                          },
                                          {
                                              slogan: { _ilike: `%${searchText}%` },
                                          },
                                          {
                                              description: { _ilike: `%${searchText}%` },
                                          },
                                      ]
                                    : undefined,
                            },
                        ],
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
