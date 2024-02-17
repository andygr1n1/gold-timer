import { getUserId } from '@/functions/universalCookie.helper'
import { Client } from '@/graphql/generated'
import { filterGoalAtom } from '@/modules/goals/stores/filterGoal.store'
import { selectedGoalAtom$ } from '@/modules/goals/stores/selectedGoal.store'

export const query_favoriteGoals = (props: {
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
            __name: 'query_favoriteGoals',
            goals: {
                __args: {
                    limit,
                    offset,
                    order_by: [{ finished_at: 'asc' }],
                    where: {
                        _and: [
                            {
                                owner_id: { _eq: getUserId() },
                                // deleted_at: { _is_null: true },
                                is_favorite: { _eq: true },
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
                goal_ritual: {
                    ritual_power: true,
                },
                status: true,
                difficulty: true,
            },
        })
    )
}
