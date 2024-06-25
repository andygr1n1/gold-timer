import { IsLoading } from '@/components/loading/IsLoading'
import { NavigateFavoriteGoals } from './NavigateFavoriteGoals'
import { TopGoalsList } from '../components/TopGoalsList'

import styles from '../goalsDashboard.module.scss'
import { useFetchGoals } from '@/modules/goals/shared-service/fetch-goals/useFetchGoals'
import { goalStatus } from '@/modules/goals/shared-service'

export const TopFavoriteGoalsWidget: React.FC = () => {
    const { isLoading, goals } = useFetchGoals({
        limit: 4,
        serverSearchInput: '',
        queryFilter: goalStatus.favorite,
    })

    if (!goals?.length) return null

    return (
        <div key={goals?.length} className={styles['dashboardWidgetWrapper']}>
            <div>
                <NavigateFavoriteGoals />
                <IsLoading isLoading={isLoading} />
                <TopGoalsList goals={goals} />
            </div>
        </div>
    )
}
