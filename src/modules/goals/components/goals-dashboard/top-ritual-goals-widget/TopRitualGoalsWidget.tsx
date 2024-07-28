import { NavigateRitualGoals } from './NavigateRitualGoals'
import { IsLoading } from '@/components/loading/IsLoading'
import { TopGoalsList } from '../components/TopGoalsList'

import styles from '../goalsDashboard.module.scss'
import { useFetchGoals } from '@/modules/goals/shared-service/fetch-goals/useFetchGoals'
import { goalStatusEnum } from '@/modules/goals/shared-service'

export const TopRitualGoalsWidget: React.FC = () => {
    const { isLoading, goals } = useFetchGoals({
        limit: 4,
        serverSearchInput: '',
        queryFilter: goalStatusEnum.ritualActive,
    })

    if (!goals?.length) return null

    return (
        <div key={goals?.length} className={styles['dashboardWidgetWrapper']}>
            <div>
                <NavigateRitualGoals />
                <IsLoading isLoading={isLoading} />
                <TopGoalsList goals={goals} />
            </div>
        </div>
    )
}
