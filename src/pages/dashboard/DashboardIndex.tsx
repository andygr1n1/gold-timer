import { TopBar } from '@/layout/topbar/Topbar'
import { CreateNewGoalWidget } from '@/modules/dashboard/widgets/create-new-goal-widget/CreateNewGoalWidget'
import { DbAchievement } from '@/modules/dashboard/components/dashboard-achievements/DbAchievements'
import { GoalsDashboardSlider } from '@/modules/dashboard/components/goals-dashboard-slider/GoalsDashboardSlider'
import { NoSprintsInfo } from '@/modules/dashboard/components/sprints-widgets/NoSprintsInfo'
import { TopGoalsWidgets } from '@/modules/dashboard/widgets/top-goals-widgets/TopGoalsWidgets'
import { CreateNewTaskWidget } from '@/modules/dashboard/widgets/create-new-task-widget/CreateNewTaskWidget'
import { observer } from 'mobx-react-lite'

export const DashboardIndex: React.FC = observer(() => {
    return (
        <div className='flex'>
            <div className=' my-5 mx-5 flex-auto overflow-auto rounded-lg bg-global-2-bg xl:ml-0 '>
                <TopBar />
                <div className='flex w-full flex-col overflow-auto pt-5 xl:h-[calc(100vh-125px)]'>
                    <div className='flex flex-col items-center justify-between  gap-10 3xl:flex-row 3xl:items-start 3xl:gap-20 3xl:p-5'>
                        <CreateNewGoalWidget />
                        <GoalsDashboardSlider />
                        {/* <FavoriteGoalsWidget /> */}
                        <div className='hidden h-[290px] w-full max-w-[400px] 3xl:flex'>
                            <NoSprintsInfo />
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-between gap-20 p-5 3xl:flex-row 3xl:items-start'>
                        <CreateNewTaskWidget />
                        <div className='flex w-full  max-w-[633px] flex-col 3xl:w-[633px]'>
                            <TopGoalsWidgets />
                        </div>
                        <div className='hidden h-[290px] w-full max-w-[400px] xl:flex'>
                            <NoSprintsInfo />
                        </div>
                    </div>
                </div>
            </div>
            <DbAchievement />
        </div>
    )
})
