import { getTopGoalColor } from '../../../helpers/getTopGoalColor'
import { IGoalSchema } from '@/modules/goals/shared-service/types'
import { TopGoalRemainingDays } from './TopGoalRemainingDays'
import { TopGoalTitle } from './TopGoalTitle'

export const TopGoalBody: React.FC<{
    goal: IGoalSchema
    className?: string
    selectGoal: () => void
    onRightClick: () => void
}> = ({ goal, className = '', selectGoal, onRightClick }) => {
    const goalClass = getTopGoalColor(goal).containerClass

    return (
        <div
            data-testid='topGoal__body'
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                selectGoal()
            }}
            onContextMenu={onRightClick}
            key={goal.id}
            className={`relative flex h-[60px] cursor-pointer items-center justify-between rounded-lg  ${goalClass} ${className} `}
        >
            <TopGoalTitle title={goal.title} />
            <TopGoalRemainingDays goal={goal} />
        </div>
    )
}
