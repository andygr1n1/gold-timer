import { useFetchGoalsByFilter } from '@/modules/goals/service'
import { NavigateRitualGoals } from './NavigateRitualGoals'
import { IsLoading } from '@/components/loading/IsLoading'
import { TopGoalsList } from '../../shared/TopGoalsList'

import styles from '../goalsDashboard.module.scss'

export const TopRitualGoalsWidget: React.FC = () => {
    const {
        isLoading,
        data: { ritual: goals },
    } = useFetchGoalsByFilter({ queryFilter: 'all', limit: 4 })

    if (isLoading) return <IsLoading isLoading={isLoading} />
    if (!goals?.length) return null

    return (
        <div key={goals?.length} className={styles['dashboardWidgetWrapper']}>
            <div>
                <NavigateRitualGoals />
                <TopGoalsList goals={goals} />
            </div>
        </div>
    )
}
