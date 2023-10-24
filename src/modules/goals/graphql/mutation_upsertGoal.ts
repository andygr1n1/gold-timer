import { IInsertRitual, IInsertNewGoal } from '@/helpers/interfaces/newGoal.interface'
import { gql } from 'graphql-request'
import { generateClient } from '../../../graphql/client'
import { processError } from '@/helpers/processError.helper'
import { IGoal$SnapshotIn } from '../mst/types'

export const mutation_upsertGoal = async (
    newGoal: IInsertNewGoal,
    newRitual: IInsertRitual[],
): Promise<IGoal$SnapshotIn | undefined> => {
    const client = generateClient()
    const mutation = gql`
        mutation mutation_upsertGoal($newGoal: goals_insert_input!, $newRitual: [goals_rituals_insert_input!]!) {
            insert_goals_one(
                object: $newGoal
                on_conflict: {
                    constraint: goals_pkey
                    update_columns: [
                        title
                        description
                        slogan
                        privacy
                        status
                        created_at
                        finished_at
                        is_favorite
                        deleted_at
                    ]
                }
            ) {
                id
                owner_id
                title
                slogan
                description
                status
                privacy
                created_at
                finished_at
                is_favorite
                difficulty
                parent_goal_id
                deleted_at
                goal_ritual {
                    goal_id
                    ritual_id
                    ritual_power
                    ritual_interval
                    ritual_type
                }
            }
            insert_goals_rituals(
                objects: $newRitual
                on_conflict: {
                    constraint: goals_rituals_pkey
                    update_columns: [ritual_power, ritual_interval, ritual_type]
                }
            ) {
                returning {
                    goal_id
                }
            }
        }
    `

    try {
        const response = await client.request(mutation, { newGoal, newRitual })

        return response.insert_goals_one
    } catch (e) {
        processError(e, 'mutation_upsertGoal error')
        return
    }
}