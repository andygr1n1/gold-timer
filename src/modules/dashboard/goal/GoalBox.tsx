import { IGoal$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'
import { GoalCountMenu } from './GoalCountMenu'

export const GoalBox: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { isFrozen, remainingTimeString } = goal

    return (
        <div className='flex w-full flex-auto flex-col items-center justify-between p-4'>
            <div className='flex  text-sm'>{` ${goal.title}`}</div>
            <div className='flex items-center justify-center '>{!isFrozen && <GoalCountMenu goal={goal} />}</div>
            <div className='relative flex'>{!isFrozen && <div className=''>{remainingTimeString}</div>}</div>
        </div>
    )
})
