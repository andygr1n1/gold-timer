import { IsLoading } from '@/components/loading/IsLoading'
import { NavigateAllActiveGoals } from './NavigateAllActiveGoals'
import { CreateGoalAction } from '../components/CreateGoalAction'
import { TopGoalsList } from '../components/TopGoalsList'
import { useFetchGoals } from '../../../shared-service/fetch-goals/useFetchGoals'
import { goalStatus } from '@/modules/goals/shared-service'
import styles from '../goalsDashboard.module.scss'

export const TopActiveGoalsWidget: React.FC = () => {
    const { isLoading, goals } = useFetchGoals({
        limit: 4,
        serverSearchInput: '',
        queryFilter: goalStatus.active,
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
                    <CreateGoalAction />
                )}
            </div>
        </div>
    )
}
