import { IsLoading } from '@/components/loading/IsLoading'
import { NavigateAllActiveGoals } from './NavigateAllActiveGoals'
import { CreateGoalAction } from '../components/CreateGoalAction'
import { TopGoalsList } from '../components/TopGoalsList'
import styles from '../goalsDashboard.module.scss'
import { useFetchActiveGoals } from '../../../service/fetch-active-goals/useFetchActiveGoals'

export const TopActiveGoalsWidget: React.FC = () => {
    const { isLoading, activeGoals } = useFetchActiveGoals({ limit: 4 })
    return (
        <div key={activeGoals?.length} className={styles['dashboardWidgetWrapper']}>
            <div>
                {isLoading ? (
                    <IsLoading isLoading={isLoading} />
                ) : activeGoals?.length ? (
                    <>
                        <NavigateAllActiveGoals />
                        <TopGoalsList goals={activeGoals} />
                    </>
                ) : (
                    <CreateGoalAction />
                )}
            </div>
        </div>
    )
}
