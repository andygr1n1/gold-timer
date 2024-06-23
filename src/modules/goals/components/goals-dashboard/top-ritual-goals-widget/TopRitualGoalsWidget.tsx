import { NavigateRitualGoals } from './NavigateRitualGoals'
import { IsLoading } from '@/components/loading/IsLoading'
import { TopGoalsList } from '../components/TopGoalsList'

import styles from '../goalsDashboard.module.scss'
import { useFetchGoals } from '@/modules/goals/service/fetch-goals/useFetchGoals'
import { goalStatus } from '@/modules/goals/service'

export const TopRitualGoalsWidget: React.FC = () => {
       const { isLoading, goals } = useFetchGoals({
           limit: 4,
           serverSearchInput: '',
           queryFilter: goalStatus.ritualActive,
       })


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
