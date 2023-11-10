import { IGoal$ } from '@/modules/goals/mst/types'
import { observer } from 'mobx-react-lite'

export const GoalTitle: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { title } = goal

    return <h3 className={`text-center font-bold`}>{title}</h3>
})
