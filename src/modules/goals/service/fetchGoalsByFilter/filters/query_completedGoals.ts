import { getUserId } from '@/functions/getUserData'
import { Client } from 'gold-timer-genql/lib/generated'
import { filterGoalAtom } from '@/modules/goals/stores/filterGoal.store'
import { selectedGoalAtom$ } from '@/modules/goals/stores/selectedGoal.store'

export const query_completedGoals = (props: {
    client: Client
    queryIsActive?: boolean
    limit?: number
    offset?: number
    filterByText: boolean
}) => {
    const { client, queryIsActive = false, limit, offset, filterByText } = props

    const searchText = selectedGoalAtom$.get(filterGoalAtom)?.search

    return (
        queryIsActive &&
        client.query({
            __name: 'query_completedGoals',
            goals: {
                __args: {
                    limit,
                    offset,
                    order_by: [{ finished_at: 'desc' }],
                    where: {
                        _and: [
                            {
                                owner_id: { _eq: getUserId() },
                                deleted_at: { _is_null: true },
                                status: { _eq: 'completed' },
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
