import { TopBar } from '@/layout/topbar/Topbar'
import { CreateNewGoalWidget } from '@/modules/dashboard/widgets/create-new-goal-widget/CreateNewGoalWidget'
import { DbAchievement } from '@/modules/dashboard/components/dashboard-achievements/DbAchievements'
import { GoalsDashboardSlider } from '@/modules/dashboard/components/goals-dashboard-slider/GoalsDashboardSlider'
import { TopGoalsWidgets } from '@/modules/dashboard/widgets/top-goals-widgets/TopGoalsWidgets'
import { CreateNewTaskWidget } from '@/modules/dashboard/widgets/create-new-task-widget/CreateNewTaskWidget'
import { observer } from 'mobx-react-lite'
import styles from './DashboardIndex.module.scss'

export const DashboardIndex: React.FC = observer(() => {
    return (
        <div className={'flex'}>
            <div className=' my-5 mx-5 flex-auto overflow-auto rounded-lg bg-global-2-bg xl:ml-0 '>
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
                        <GoalsDashboardSlider />
                    </div>
                </div>
            </div>
            <DbAchievement />
        </div>
    )
})
