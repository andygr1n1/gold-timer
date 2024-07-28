import { IsLoading } from '@/components/loading/IsLoading'
import { NavigateExpiredGoals } from './NavigateExpiredGoals'
import { TopGoalsList } from '../components/TopGoalsList'

import styles from '../goalsDashboard.module.scss'
import { useFetchGoals } from '@/modules/goals/shared-service/fetch-goals/useFetchGoals'
import { goalStatusEnum } from '@/modules/goals/shared-service'

export const TopExpiredGoalsWidget: React.FC = () => {
    const { isLoading, goals } = useFetchGoals({
        limit: 4,
        serverSearchInput: '',
        queryFilter: goalStatusEnum.expired,
    })

    if (!goals?.length) return null

    return (
        <div key={goals?.length} className={styles['dashboardWidgetWrapper']}>
            <div className='relative w-full h-full animate-opacity '>
                {isLoading && <IsLoading isLoading={!!isLoading} />}
                <NavigateExpiredGoals />
                <TopGoalsList goals={goals} />
            </div>
        </div>
    )
}
