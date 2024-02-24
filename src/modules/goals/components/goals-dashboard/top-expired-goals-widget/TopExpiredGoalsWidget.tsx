import { useFetchGoalsByFilter } from '@/modules/goals/service'
import { IsLoading } from '@/components/loading/IsLoading'
import { NavigateExpiredGoals } from './NavigateExpiredGoals'
import { TopGoalsList } from '../../shared/TopGoalsList'

import styles from '../goalsDashboard.module.scss'

export const TopExpiredGoalsWidget: React.FC = () => {
    const {
        isLoading,
        data: { expired: goals },
    } = useFetchGoalsByFilter({ queryFilter: 'all', limit: 4 })

    if (isLoading) return <IsLoading isLoading={isLoading} />
    if (!goals?.length) return null

    return (
        <div key={goals?.length} className={styles['dashboardWidgetWrapper']}>
            <div>
                <NavigateExpiredGoals />
                <TopGoalsList goals={goals} />
            </div>
        </div>
    )
}
