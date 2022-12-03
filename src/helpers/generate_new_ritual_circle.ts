import { IGoal$ } from '@/mst/types'
import { add } from 'date-fns'

export const generateNewRitualCircle = (
    goal: IGoal$,
    new_ritual_interval: number,
): { ritual_goal_created_at: Date; ritual_goal_finished_at: Date } => {
    const today = new Date(Date.now())

    let ritual_goal_created_at = today
    let ritual_goal_finished_at = today

    if (goal.finished_at && goal.created_at) {
        if (goal.finished_at <= today) {
            ritual_goal_created_at = today
            ritual_goal_finished_at = add(ritual_goal_created_at, { days: new_ritual_interval })
        } else {
            ritual_goal_created_at = goal.finished_at
            ritual_goal_finished_at = add(ritual_goal_created_at, { days: new_ritual_interval })
        }
    }

    return { ritual_goal_created_at, ritual_goal_finished_at }
}
