import { generateTSClient } from '@/graphql/client'
import { IGoal } from '../types'
import { mutation_coinsOnRitualizeGoal } from './mutation_coinsOnRitualizeGoal'
import { mutation_goalGoalRitualize } from './mutation_goalGoalRitualize'
import { IFabricGoalRitualize, IRitualizeUpdateFields } from './types'
import { generateNewRitualCircle } from '@/helpers/generateNewRitualCircle'

export const fabric_goalRitualize = async (goal: IGoal): Promise<IFabricGoalRitualize | undefined> => {
    const client = await generateTSClient()

    if (!goal.goal_ritual) return

    const { ritual_goal_created_at, ritual_goal_finished_at } = generateNewRitualCircle({
        ritual_type: goal.goal_ritual?.ritual_type,
        new_ritual_interval: goal.goal_ritual?.ritual_interval,
        goal_finished_at: new Date(goal.finished_at),
    })

    const ritualizeUpdateFields: IRitualizeUpdateFields = {
        id: goal.id,
        ritual_id: goal.goal_ritual?.ritual_id,
        ritual_power: goal.goal_ritual?.ritual_power || 0 + 1,
        created_at: ritual_goal_created_at,
        finished_at: ritual_goal_finished_at,
    }

    const resStatus = await Promise.all([
        mutation_goalGoalRitualize(client, ritualizeUpdateFields),
        mutation_coinsOnRitualizeGoal(client, goal),
    ])

    return { goal: resStatus[0], coins: resStatus[1] }
}
