import { IGoal$ } from '@/mst/types'
import { Divider } from 'antd'
import { format } from 'date-fns'
import { observer } from 'mobx-react-lite'
import { ActiveGoalCreatedAt } from './ActiveGoalCreatedAt'

export const PanelBody: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    return (
        <div className='flex flex-col gap-1 font-neon text-cText'>
            <ActiveGoalCreatedAt goal={goal} />
            {!!goal.slogan.length && (
                <div className='my-1'>
                    <div className='text-xs'>Slogan:</div>
                    <div className='text-base'>{goal.slogan}</div>
                </div>
            )}
            {!!goal.description.length && (
                <div className='my-1'>
                    <div className='text-xs'>Description:</div>
                    <div className='text-base'>{goal.description}</div>
                </div>
            )}
            <Divider />

            <div className='my-1'>
                <div className='text-xs'>Created:</div>
                <div className='text-sky-600'>{format(goal.created_at!, 'do MMMM yyyy')}</div>
            </div>
            <div className='my-1'>
                <div className='text-xs'>Deadline:</div>
                <div className='text-emerald-600'>{format(goal.finished_at!, 'do MMMM yyyy')}</div>
            </div>
            <div className='my-1'>
                <div className='text-xs'>Difficulty:</div>
                <div>{goal.difficulty}</div>
            </div>
        </div>
    )
})