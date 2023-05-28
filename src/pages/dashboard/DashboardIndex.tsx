import { TopBar } from '@/layout/topBar/TopBar'
import { CreateNewGoalWidget } from '@/modules/dashboard/widgets/create-new-goal-widget/CreateNewGoalWidget'
import { DbAchievement } from '@/modules/dashboard/components/dashboard-achievements/DbAchievements'
import { TopGoalsWidgets } from '@/modules/dashboard/widgets/top-goals-widgets/TopGoalsWidgets'
import { CreateNewTaskWidget } from '@/modules/dashboard/widgets/create-new-task-widget/CreateNewTaskWidget'
import { observer } from 'mobx-react-lite'
import styles from './DashboardIndex.module.scss'
import { GoalsDashboardCarousel } from '@/modules/dashboard/components/goals-dashboard-slider/GoalsDashboardCarousel'

export const DashboardIndex: React.FC = observer(() => {
    return (
        <div className={'flex'}>
            <div className=' mx-5 my-5 flex-auto overflow-auto rounded-lg bg-global-2-bg 2xl:ml-0 '>
                <TopBar />
                <div className={styles['grid-parent']}>
                    <div className={`${styles['grid-child']} ${styles['alpha']}`}>
                        <CreateNewGoalWidget />
                        <CreateNewTaskWidget />
                    </div>
                    <div className={`${styles['grid-child']} ${styles['beta']}`}>
                        <TopGoalsWidgets />
                    </div>
                    <div className={`${styles['grid-child']} ${styles['gama']}`}>
                        <GoalsDashboardCarousel />
                    </div>
                </div>
            </div>
            <DbAchievement />
        </div>
    )
})
