import { convertStringDate, formatDateWithTimezone, prepareFinishedAtForInsert } from '@/helpers/date.helpers'
import { setGoalDifficulty } from '@/helpers/setGoalDifficulty'
import { type IGoalSchema } from '@/modules/goals/shared-service'

export const goalSnapshotOut = (props: { goal: IGoalSchema }) => {
    const { goal } = props
    if (!goal.finished_at) goal.finished_at = formatDateWithTimezone()
    goal.finished_at = prepareFinishedAtForInsert(goal.finished_at)
    goal.difficulty = setGoalDifficulty(convertStringDate(goal.finished_at))
    return props.goal
}
