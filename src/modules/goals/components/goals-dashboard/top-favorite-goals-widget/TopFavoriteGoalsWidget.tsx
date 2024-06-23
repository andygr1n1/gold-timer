import { IsLoading } from '@/components/loading/IsLoading'
import { NavigateFavoriteGoals } from './NavigateFavoriteGoals'
import { TopGoalsList } from '../components/TopGoalsList'

import styles from '../goalsDashboard.module.scss'
import { useFetchFavoriteGoals } from '@/modules/goals/service/fetch-favorite-goals/useFetchFavoriteGoals'

export const TopFavoriteGoalsWidget: React.FC = () => {
    const { isLoading, favoriteGoals } = useFetchFavoriteGoals({ limit: 4 })

    if (isLoading) return <IsLoading isLoading={isLoading} />
    if (!favoriteGoals?.length) return null

    return (
        <div key={favoriteGoals?.length} className={styles['dashboardWidgetWrapper']}>
            <div>
                <NavigateFavoriteGoals />
                <TopGoalsList goals={favoriteGoals} />
            </div>
        </div>
    )
}
