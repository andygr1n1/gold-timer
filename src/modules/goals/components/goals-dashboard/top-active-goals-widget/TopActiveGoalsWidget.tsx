import { useFetchGoalsByFilter } from '../../../service/fetchGoalsByFilter/useFetchGoalsByFilter'
import { IsLoading } from '@/components/loading/IsLoading'
import { NavigateAllActiveGoals } from './NavigateAllActiveGoals'
import { CreateGoalAction } from '../components/CreateGoalAction'
import { TopGoalsList } from '../components/TopGoalsList'
import styles from '../goalsDashboard.module.scss'

export const TopActiveGoalsWidget: React.FC = () => {
    const {
        isLoading,
        data: { active: goals },
    } = useFetchGoalsByFilter({ queryFilter: 'all', limit: 4 })
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
