import { generateTSClient } from '@/graphql/client'
import { goal_status_enum_enum } from '@/graphql/generated'
import { IActiveGoalOptimized } from '../types'
import { mutation_goalStatus } from './mutation_goalStatus'
import { IFabricGoalStatus } from './types'
import { mutation_coinsOnCompleteGoal } from './mutation_coinsOnCompleteGoal'
import { mutation_goalStatusCompleted } from './mutation_goalStatusCompleted'

export const fabric_goalStatus = async (
    goal: IActiveGoalOptimized,
    status: goal_status_enum_enum,
): Promise<IFabricGoalStatus> => {
    const client = generateTSClient({ batch: true })
    const statusMutation = () =>
        status === 'completed'
            ? mutation_goalStatusCompleted(client, goal.id)
            : mutation_goalStatus(client, goal, status)

    const resStatus = await Promise.all([statusMutation(), mutation_coinsOnCompleteGoal(client, goal, status)])

    return { status: resStatus[0], coins: resStatus[1] }
}
