import { IGoal$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'
import { ActiveGoalDeadline } from './ActiveGoalDeadline'
import { ExpiredGoalDeadline } from './ExpiredGoalDeadline'

export const GoalDeadline: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { isExpired } = goal

    if (isExpired) return <ExpiredGoalDeadline goal={goal} />

    return <ActiveGoalDeadline goal={goal} />
})

