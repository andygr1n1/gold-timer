import { GoalsTopbar } from '@/components/topbar/Topbar'
import { observer } from 'mobx-react-lite'
import { DbAchievement } from './components/dashboard-achievements/DbAchievements'
import { GoalsDashboardSlider } from './components/goals-dashboard-slider/GoalsDashboardSlider'
import { CreateNewGoalWidget } from './components/create-new-goal-widget/CreateNewGoalWidget'
import { FavoriteGoalsWidget } from './components/favorite-goals-widget/FavoriteGoalsWidget'
import { TopActiveGoalsWidget } from './components/top-goals-widgets/top-active-goals-widget/TopActiveGoalsWidget'
import { TopRitualGoalsWidget } from './components/top-goals-widgets/TopRitualGoalsWidget'
import { TopExpiredGoalsWidget } from './components/top-goals-widgets/TopExpiredGoalsWidget'
import { NoGoalsInfo } from './components/top-goals-widgets/NoGoalsInfo'
import { NoSprintsInfo } from './components/sprints-widgets/NoSprintsInfo'
import { CreateNewTaskWidget } from '@/widgets/tasks/create-new-task-widget/CreateNewTaskWidget'

export const GoalsDashboard: React.FC = observer(() => {
    return (
        <div className='module-wrapper'>
            <div className='flex'>
                <div className=' my-5 mx-5 flex-auto overflow-auto rounded-lg bg-global-2-bg xl:ml-0 '>
                    <GoalsTopbar />
                    <div className='flex w-full flex-col overflow-auto pt-5 xl:h-[calc(100vh-125px)]'>
                        <div className='flex flex-col items-center justify-between gap-10 3xl:flex-row 3xl:items-start 3xl:gap-20 3xl:p-5'>
                            <CreateNewGoalWidget />
                            <GoalsDashboardSlider />
                            <FavoriteGoalsWidget />
                        </div>
                        <div className='flex flex-col items-center justify-between gap-20 p-5 3xl:flex-row 3xl:items-start'>
                            <CreateNewTaskWidget />
                            <div className='flex w-full  max-w-[633px] flex-col 3xl:w-[633px]'>
                                <TopActiveGoalsWidget />
                                <TopRitualGoalsWidget />
                                <TopExpiredGoalsWidget />
                                <NoGoalsInfo />
                            </div>
                            <div className='hidden h-[290px] w-full max-w-[400px] xl:flex'>
                                <NoSprintsInfo />
                            </div>
                        </div>
                    </div>
                </div>
                <DbAchievement />
            </div>
        </div>
    )
})
