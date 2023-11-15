import { IGoal$ } from '@/modules/goals/mst/types'
import { observer } from 'mobx-react-lite'
import { GoalWrapper } from './goal-components/GoalWrapper'
import { GoalCreatedAt } from './goal-components/GoalCreatedAt'
import { GoalDeadline } from './goal-components/GoalDeadline'
import ritualLogoIcon from '@/assets/ritual-logo.svg'
import { Icon } from '@iconify/react'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { PopoverGoalActionsContent } from '@/components/popover-goal-actions/PopoverGoalActionsContent'
import { useState } from 'react'

export const Goal: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { slogan, ritualGoalPower, title, is_favorite } = goal

    const [open, setOpen] = useState(false)

    return (
        <XDropdown
            open={open}
            onOpenChange={() => {
                setOpen(!open)
            }}
            trigger={['contextMenu']}
            dropdownRender={() => <PopoverGoalActionsContent action={() => setOpen(false)} goal={goal} />}
        >
            <div>
                {' '}
                <GoalWrapper goal={goal}>
                    <div className='text-cText flex h-full w-full flex-auto flex-col'>
                        <div className='flex h-full flex-col'>
                            <div className='flex justify-between'>
                                <div>
                                    <GoalCreatedAt goal={goal} />
                                    <GoalDeadline goal={goal} />
                                </div>
                            </div>

                            <div className='flex h-full flex-col justify-start gap-5 '>
                                <div className={`text-base font-bold`}>{title}</div>
                                <div className=' text-sm font-bold'>{slogan}</div>
                            </div>
                            <div className='flex items-center justify-between gap-5 '>
                                <div className='flex items-center justify-center'>
                                    {!!ritualGoalPower && (
                                        <>
                                            <span className='text-[26px] font-semibold  text-emerald-700'>
                                                {ritualGoalPower}
                                            </span>
                                            <img src={ritualLogoIcon} width={30} height={30} />
                                        </>
                                    )}
                                </div>
                                {is_favorite && (
                                    <Icon
                                        icon='material-symbols:ecg-heart'
                                        width={30}
                                        height={30}
                                        className='animate-opacity-3 text-red-700'
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </GoalWrapper>
            </div>
        </XDropdown>
    )
})
