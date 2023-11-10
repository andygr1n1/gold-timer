import { IGoal$ } from '@/modules/goals/mst/types'
import { observer } from 'mobx-react-lite'
import { GoalWrapper } from './goal-components/GoalWrapper'
import { GoalCreatedAt } from './goal-components/GoalCreatedAt'
import { GoalDeadline } from './goal-components/GoalDeadline'
import ritualLogoIcon from '@/assets/ritual-logo.svg'

export const Goal: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { slogan, ritualGoalPower, title } = goal

    return (
        <GoalWrapper goal={goal}>
            <div className='text-cText flex h-full w-full flex-auto flex-col'>
                <div className='flex h-full flex-col'>
                    <div className='flex justify-between'>
                        <div>
                            <GoalCreatedAt goal={goal} />
                            <GoalDeadline goal={goal} />
                        </div>
                        <div className='mt-2 flex items-start justify-center'>
                            {!!ritualGoalPower && (
                                <>
                                    <span className='text-xl font-bold  text-emerald-700'>{ritualGoalPower}</span>
                                    <img src={ritualLogoIcon} width={30} height={30} />
                                </>
                            )}
                        </div>
                    </div>

                    <div className='flex h-full flex-col justify-start gap-5 '>
                        <div className={`text-base font-bold`}>{title}</div>
                        <div className=' text-sm font-bold'>{slogan}</div>
                    </div>
                </div>
            </div>
        </GoalWrapper>
    )
})
