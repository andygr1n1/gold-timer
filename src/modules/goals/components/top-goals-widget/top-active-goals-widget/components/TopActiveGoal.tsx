import { XBadge } from '@/components-x/x-badge/XBadge'
import { rootStore$ } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import styles from '../../TopGoalsWidgets.module.scss'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { IActiveGoalOptimized } from '../service/fetch_active_goals/query_activeGoals'
import { TopActiveGoalMenu } from './TopActiveGoalMenu'

export const TopActiveGoal: React.FC<{ goal: IActiveGoalOptimized; className?: string; zIndex?: number }> = ({
    goal,
    className = '',
    zIndex,
}) => {
    const { popoverState, setPopoverState } = useTogglePopoverState()

    return (
        <XDropdown
            open={popoverState}
            onOpenChange={() => {
                setPopoverState(!popoverState)
            }}
            overlayStyle={{ zIndex }}
            trigger={['click', 'contextMenu']}
            dropdownRender={() => <TopActiveGoalMenu action={() => setPopoverState(false)} goal={goal} />}
        >
            <div
                onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    rootStore$.goals$.openViewMode(goal.id)
                    setPopoverState(false)
                }}
                onContextMenu={() => {
                    setPopoverState(!popoverState)
                }}
                key={goal.id}
                className={`duration-300 ${styles['goal']} bg-blue-700 hover:bg-blue-600 ${className} `}
            >
                <span className='h-fit w-[calc(100%-16px)] items-center overflow-hidden text-ellipsis whitespace-nowrap rounded-md p-2 align-middle text-white'>
                    {goal.title}
                </span>
                <XBadge
                    className='absolute right-[-5px] top-[-10px]'
                    overflowCount={999}
                    style={{
                        background: goal.totalRemainingDays >= 2 ? '#1e3a8a' : 'transparent',
                        color: 'white',
                        borderColor: goal.totalRemainingDays >= 2 ? '#1e3a8a' : 'transparent',
                        display: 'block',
                    }}
                    offset={[-6, 1]}
                    count={
                        goal.isDeadline ? (
                            <Icon icon='emojione-v1:ringing-bell' width={24} height={24} />
                        ) : (
                            goal.totalRemainingDays
                        )
                    }
                />
            </div>
        </XDropdown>
    )
}
