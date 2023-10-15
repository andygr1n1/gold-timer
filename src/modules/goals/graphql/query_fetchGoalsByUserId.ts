import { GOAL_STATUS_ENUM } from '@/helpers/enums'
import { gql } from 'graphql-request'
import { generateClient } from '../../../graphql/client'
import { processError } from '@/helpers/processError.helper'
import { IGoal$SnapshotIn } from '@/modules/goals/mst/types'

export const query_fetchGoalsByUserId = async (owner_id: string): Promise<IGoal$SnapshotIn[] | undefined> => {
    const client = generateClient()

    // const finishedAtFilter = add(new Date(Date.now()), { days: 2 })

    const query = gql`
        query query_fetchGoalsByUserId($owner_id: uuid) {
            goals(
                where: {_or: [
                                {
                                    owner_id: {_eq:  $owner_id},
                                    status: {_in: [${GOAL_STATUS_ENUM.ACTIVE}]},
                                    # finished_at: {_lte: $finishedAtFilter}
                                },
                                {
                                    owner_id: {_eq:  $owner_id},
                                    status: {_in: [${GOAL_STATUS_ENUM.ACTIVE}]},
                                    is_favorite: {_eq: true}
                                }
                            ],
                        },
                order_by: { finished_at: asc }
            ) {
                id
                owner_id
                created_at
                description
                difficulty
                finished_at
                privacy
                slogan
                status
                title
                is_favorite
                deleted_at
                goal_ritual {
                    ritual_id
                    goal_id
                    ritual_type
                    ritual_power
                    ritual_interval
                }
            },
            
        }
    `

    try {
        const response = await client.request(query, { owner_id })

        return response.goals
    } catch (e) {
        processError(e, 'query_fetchGoalsByUserId error')
        return
    }
}
