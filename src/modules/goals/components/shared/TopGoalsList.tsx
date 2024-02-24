import { IActiveGoalOptimized } from '@/modules/goals/service'
import { TopGoal } from '../goals-dashboard/components/TopGoal'
import clsx from 'clsx'

export const TopGoalsList: React.FC<{ goals: IActiveGoalOptimized[] }> = ({ goals }) => {
    return (
        <>
            {goals.slice(0, 4).map((goal) => (
                <div key={goal.id}>
                    <TopGoal
                        goal={goal}
                        className={clsx(goal.isFromFuture && !goal.is_favorite && 'opacity-70 hover:opacity-100')}
                    />
                </div>
            ))}
        </>
    )
}
