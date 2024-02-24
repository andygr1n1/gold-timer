import { useFetchGoalsByFilter } from '@/modules/goals/service'
import { IsLoading } from '@/components/loading/IsLoading'
import { NavigateFavoriteGoals } from './NavigateFavoriteGoals'
import { TopGoalsList } from '../../shared/TopGoalsList'

import styles from '../goalsDashboard.module.scss'

export const TopFavoriteGoalsWidget: React.FC = () => {
    const {
        isLoading,
        data: { favorite: goals },
    } = useFetchGoalsByFilter({ queryFilter: 'all', limit: 8 })

    if (isLoading) return <IsLoading isLoading={isLoading} />
    if (!goals?.length) return null

    return (
        <div key={goals?.length} className={styles['dashboardWidgetWrapper']}>
            <div>
                <NavigateFavoriteGoals />
                <TopGoalsList goals={goals} />
            </div>
        </div>
    )
}
