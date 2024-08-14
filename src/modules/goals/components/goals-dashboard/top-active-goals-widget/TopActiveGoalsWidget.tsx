import { IsLoading } from '@/components/loading/IsLoading'
import { NavigateAllActiveGoals } from './NavigateAllActiveGoals'
import { Widget_AddGoal } from '../components/widget-add-goal/Widget_AddGoal'
import { TopGoalsList } from '../components/TopGoalsList'
import { useFetchGoals } from '../../../shared-service/fetch-goals/useFetchGoals'
import { goalStatusEnum } from '@/modules/goals/shared-service'
import styles from '../goalsDashboard.module.scss'

export const TopActiveGoalsWidget: React.FC = () => {
    const { isLoading, goals } = useFetchGoals({
        limit: 4,
        serverSearchInput: '',
        queryFilter: goalStatusEnum.active,
    })

    return (
        <div key={goals?.length} className={styles['dashboardWidgetWrapper']}>
            <div>
                <NavigateAllActiveGoals />
                <IsLoading isLoading={isLoading} />
                {goals?.length ? (
                    <>
                        <TopGoalsList goals={goals} />
                    </>
                ) : (
                    <Widget_AddGoal />
                )}
            </div>
        </div>
    )
}
