import { IGoal$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'
import { ActiveGoalDeadline } from './ActiveGoalDeadline'

export const PanelHeader: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    return (
        <div id={goal.id} className='flex flex-col gap-1'>
            <div className='font-bold'>{goal.title}</div>
            <ActiveGoalDeadline goal={goal} />
        </div>
    )
})
