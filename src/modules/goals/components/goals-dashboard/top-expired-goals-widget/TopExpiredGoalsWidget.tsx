import { useFetchGoalsByFilter } from '@/modules/goals/service'
import { IsLoading } from '@/components/loading/IsLoading'
import { NavigateExpiredGoals } from './NavigateExpiredGoals'
import { TopGoalsList } from '../components/TopGoalsList'

import styles from '../goalsDashboard.module.scss'

export const TopExpiredGoalsWidget: React.FC = () => {
    const {
        isLoading,
        isFetching,
        data: { expired: goals },
    } = useFetchGoalsByFilter({ queryFilter: 'all', limit: 4 })

    if (!goals?.length) return null

    return (
        <div key={goals?.length} className={styles['dashboardWidgetWrapper']}>
            <div className='relative w-full h-full animate-opacity '>
                <>
                    {(isLoading || isFetching) && <IsLoading isLoading={!!isLoading || !!isFetching} />}
                    <NavigateExpiredGoals />
                    <TopGoalsList goals={goals} />
                </>
            </div>
        </div>
    )
}
