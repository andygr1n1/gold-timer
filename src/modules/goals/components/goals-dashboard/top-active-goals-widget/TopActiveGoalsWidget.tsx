import { IsLoading } from '@/components/loading/IsLoading'
import { NavigateAllActiveGoals } from './NavigateAllActiveGoals'
import { CreateGoalAction } from '../components/CreateGoalAction'
import { TopGoalsList } from '../components/TopGoalsList'
import { useFetchGoals } from '../../../service/fetch-goals/useFetchGoals'
import { goalStatus } from '@/modules/goals/service'
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
                {isLoading ? (
                    <IsLoading isLoading={isLoading} />
                ) : goals?.length ? (
                    <>
                        <NavigateAllActiveGoals />
                        <TopGoalsList goals={goals} />
                    </>
                ) : (
                    <CreateGoalAction />
                )}
            </div>
        </div>
    )
}
