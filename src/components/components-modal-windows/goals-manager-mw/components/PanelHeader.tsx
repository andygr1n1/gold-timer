import { IGoal$ } from '@/modules/goals/mst/types'
import { observer } from 'mobx-react-lite'
import { GoalDeadline } from './deadline/GoalDeadline'

export const PanelHeader: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    return (
        <div id={goal.id} className='flex flex-col gap-1'>
            <div className='text-cText font-bold'>{goal.title}</div>
            <GoalDeadline goal={goal} />
            {goal.goal_ritual?.ritual_power && (
                <div className=' flex items-center gap-1'>
                    <span className='text-sm text-slate-500'>power:</span>
                    <span className='text-sm font-bold text-indigo-700'>{goal.goal_ritual?.ritual_power}</span>
                </div>
            )}
        </div>
    )
})
