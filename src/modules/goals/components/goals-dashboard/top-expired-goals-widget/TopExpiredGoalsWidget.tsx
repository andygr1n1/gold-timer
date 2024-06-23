import { IsLoading } from '@/components/loading/IsLoading'
import { NavigateExpiredGoals } from './NavigateExpiredGoals'
import { TopGoalsList } from '../components/TopGoalsList'

import styles from '../goalsDashboard.module.scss'
import { useFetchExpiredGoals } from '@/modules/goals/service/fetch-expired-goals/useFetchExpiredGoals'

export const TopExpiredGoalsWidget: React.FC = () => {
    const { isLoading, expiredGoals } = useFetchExpiredGoals({ limit: 4 })

    if (!expiredGoals?.length) return null

    return (
        <div key={expiredGoals?.length} className={styles['dashboardWidgetWrapper']}>
            <div className='relative w-full h-full animate-opacity '>
                {isLoading && <IsLoading isLoading={!!isLoading} />}
                <NavigateExpiredGoals />
                <TopGoalsList goals={expiredGoals} />
            </div>
        </div>
    )
}
