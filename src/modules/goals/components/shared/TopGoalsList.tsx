import { IGoal } from '@/modules/goals/service'
import { TopGoal } from '../goals-dashboard/components/TopGoal'
import clsx from 'clsx'
import { calculateIsFromFuture } from '../../helpers/optimizeActiveGoalsData'

export const TopGoalsList: React.FC<{ goals: IGoal[] }> = ({ goals }) => {
    return (
        <>
            {goals.slice(0, 4).map((goal) => (
                <div key={goal.id} data-testid='topGoal'>
                    <TopGoal
                        goal={goal}
                        className={clsx(
                            calculateIsFromFuture(goal) && !goal.is_favorite && 'opacity-70 hover:opacity-100',
                        )}
                    />
                </div>
            ))}
        </>
    )
}
