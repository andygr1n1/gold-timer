import { generateTSClient } from '@/graphql/client'
import { IGoal, IGoalQueryTypeFilter } from '../types'
import { mutation_goalStatus } from './mutation_goalStatus'
import { IFabricGoalStatus } from './types'
import { mutation_coinsOnCompleteGoal } from './mutation_coinsOnCompleteGoal'
import { mutation_goalStatusCompleted } from './mutation_goalStatusCompleted'

export const fabric_goalStatus = async (goal: IGoal, status: IGoalQueryTypeFilter): Promise<IFabricGoalStatus> => {
    const client = await generateTSClient()
    const statusMutation = () =>
        status === 'completed'
            ? mutation_goalStatusCompleted(client, goal.id)
            : mutation_goalStatus(client, goal, status)

    const resStatus = await Promise.all([statusMutation(), mutation_coinsOnCompleteGoal(client, goal, status)])

    return { status: resStatus[0], coins: resStatus[1] }
}
