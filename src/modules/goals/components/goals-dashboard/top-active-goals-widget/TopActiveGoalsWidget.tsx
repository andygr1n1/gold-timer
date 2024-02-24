import { useFetchGoalsByFilter } from '../../../service/fetchGoalsByFilter/useFetchGoalsByFilter'
import { IsLoading } from '@/components/loading/IsLoading'
import { NavigateAllActiveGoals } from './NavigateAllActiveGoals'
import { CreateGoalAction } from '../../shared/CreateGoalAction'
import { TopGoalsList } from '../../shared/TopGoalsList'
import styles from '../goalsDashboard.module.scss'

export const TopActiveGoalsWidget: React.FC = () => {
    const {
        isLoading,
        data: { active: goals },
    } = useFetchGoalsByFilter({ queryFilter: 'all', limit: 8 })

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
