import { IGoal$ } from '@/modules/goals/mst/types'
import { observer } from 'mobx-react-lite'

export const GoalTitle: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { title, isRitualGoal, isExpired, isCompleted } = goal

    let styleByGoalType = 'bg-green-500'

    if (isRitualGoal) styleByGoalType = 'bg-indigo-500 text-indigo-900'

    if (isExpired) styleByGoalType = 'bg-red-500 text-red-900'

    if (isCompleted) styleByGoalType = 'bg-amber-500'

    return <h3 className={`my-[9px] p-1 text-center font-bold text-gray-800 ${styleByGoalType}`}>{title}</h3>
})
