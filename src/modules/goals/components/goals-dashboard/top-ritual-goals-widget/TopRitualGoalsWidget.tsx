import { NavigateRitualGoals } from './NavigateRitualGoals'
import { IsLoading } from '@/components/loading/IsLoading'
import { TopGoalsList } from '../components/TopGoalsList'

import styles from '../goalsDashboard.module.scss'
import { useFetchTopRitualGoals } from './service/useFetchTopRitualGoals'

export const TopRitualGoalsWidget: React.FC = () => {
    const { isLoading, goals } = useFetchTopRitualGoals()

    if (isLoading) return <IsLoading isLoading={isLoading} />
    if (!goals?.length) return null

    console.log('goals', goals)

    return (
        <div key={goals?.length} className={styles['dashboardWidgetWrapper']}>
            <div>
                <NavigateRitualGoals />
                <TopGoalsList goals={goals} />
            </div>
        </div>
    )
}
