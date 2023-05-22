import { STATUS_ENUM } from '@/helpers/enums'
import { IGoal$SnapshotIn } from '@/mst/types'
import { gql } from 'graphql-request'
import { generateClient } from '../client'
import { add } from 'date-fns'

export const fetchGoalsByUserId = async (owner_id: string): Promise<IGoal$SnapshotIn[] | undefined> => {
    const client = generateClient()

    const finishedAtFilter = add(new Date(Date.now()), { days: 2 })

    const query = gql`
        query fetchGoalsByUserId($owner_id: uuid, $finishedAtFilter:timestamptz) {
            goals(
                where: { 
                    owner_id: { _eq: $owner_id },
                    status: { _in: [${STATUS_ENUM.ACTIVE}] },
                    finished_at: {_lte: $finishedAtFilter}
                    }
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
                goal_ritual {
                    ritual_id
                    goal_id
                    ritual_type
                    ritual_power
                    ritual_interval
                }
            }
        }
    `

    try {
        const response = await client.request(query, { owner_id, finishedAtFilter })

        return response.goals
    } catch (e) {
        console.error('fetchGoalsByUserId error:', e)
        alert(e)
        return
    }
}
