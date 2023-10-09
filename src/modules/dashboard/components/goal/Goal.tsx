import { IGoal$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'
import { Icon } from '@iconify/react'
import { GoalWrapper } from './goal-components/GoalWrapper'
import { GoalCreatedAt } from './goal-components/GoalCreatedAt'
import { GoalDeadline } from './goal-components/GoalDeadline'
import { GoalTitle } from './goal-components/GoalTitle'

export const Goal: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { slogan, description, ritualGoalPower } = goal

    return (
        <GoalWrapper goal={goal}>
            <div className='flex flex-auto flex-col px-5 pb-0 pt-5'>
                <div className='flex h-full flex-col'>
                    <GoalCreatedAt goal={goal} />
                    <GoalDeadline goal={goal} />

                    <GoalTitle goal={goal} />
                    <div className='text-center text-base font-bold'>{slogan}</div>

                    <div className='my-4 max-w-[350px] truncate text-center'>{description}</div>
                </div>
                <div className='flex flex-auto justify-between gap-3'>
                    {!!ritualGoalPower && (
                        <div className='gap flex items-end  justify-center'>
                            <Icon icon='fluent-emoji:magic-wand' className='text-4xl' />
                            <span className='text-2xl font-bold  text-indigo-800'>{ritualGoalPower}</span>
                        </div>
                    )}
                </div>
            </div>
        </GoalWrapper>
    )
})
