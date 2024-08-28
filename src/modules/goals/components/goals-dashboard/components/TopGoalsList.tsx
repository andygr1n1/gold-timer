import { type IGoalSchema } from '@/modules/goals/shared-service'
import { TopGoal } from './TopGoal'
import clsx from 'clsx'
import { calculateIsFromFuture } from '../../../helpers/optimizeActiveGoalsData'

export const TopGoalsList: React.FC<{ goals: IGoalSchema[] }> = ({ goals }) => {
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
