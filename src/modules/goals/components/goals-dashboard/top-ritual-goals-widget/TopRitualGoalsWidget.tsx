import { NavigateRitualGoals } from './NavigateRitualGoals'
import { IsLoading } from '@/components/loading/IsLoading'
import { TopGoalsList } from '../components/TopGoalsList'

import styles from '../goalsDashboard.module.scss'
import { useFetchRitualGoals } from '@/modules/goals/service/fetch-ritual-goals/useFetchRitualGoals'

export const TopRitualGoalsWidget: React.FC = () => {
    const { isLoading, ritualGoals } = useFetchRitualGoals({ limit: 4, expiredGoals: false })

    if (isLoading) return <IsLoading isLoading={isLoading} />
    if (!ritualGoals?.length) return null

    return (
        <div key={ritualGoals?.length} className={styles['dashboardWidgetWrapper']}>
            <div>
                <NavigateRitualGoals />
                <TopGoalsList goals={ritualGoals} />
            </div>
        </div>
    )
}
