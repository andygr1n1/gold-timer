import { RdLoader } from '@/components/loader/RdLoader'
import { GoalsTopbar } from '@/components/topbar/Topbar'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useRootStore } from '../../StoreProvider'
import { DbAchievement } from './components/dashboard-achievements/DbAchievements'
import { GoalsDashboardSlider } from './components/goals-dashboard-slider/GoalsDashboardSlider'
import { GoalsActions } from './components/goals-actions/GoalsActions'
import { FavoriteGoalsWidget } from './components/favorite-goals-widget/FavoriteGoalsWidget'
import { TopActiveGoalsWidget } from './components/top-goals-widgets/TopActiveGoalsWidget'
import { TopRitualGoalsWidget } from './components/top-goals-widgets/TopRitualGoalsWidget'
import { TopExpiredGoalsWidget } from './components/top-goals-widgets/TopExpiredGoalsWidget'
import { NoGoalsInfo } from './components/top-goals-widgets/NoGoalsInfo'
import { NoSprintsInfo } from './components/sprints-widgets/NoSprintsInfo'
import { CreateNewTaskWidget } from '@/widgets/tasks/create-new-task-widget/CreateNewTaskWidget'

export const GoalsDashboard: React.FC = observer(() => {
    const [loading, setLoading] = useState(true)

    const { fetchGoals } = useRootStore()

    useEffect(() => {
        fetchGoals().finally(() => {
            const timeoutId = setTimeout(() => {
                setLoading(false)
                clearTimeout(timeoutId)
            }, 200)
        })
    }, [])

    return (
        <div className='module-wrapper'>
            {loading ? (
                <RdLoader loading={loading} />
            ) : (
                <div className='flex'>
                    <div className='my-5 mr-5 flex-auto overflow-auto rounded-lg bg-global-2-bg'>
                        <GoalsTopbar />
                        <div className='flex w-full flex-col overflow-auto pt-5 xl:h-[calc(100vh-125px)]'>
                            <div className='flex items-start justify-between gap-20 p-5'>
                                <GoalsDashboardSlider />
                                <FavoriteGoalsWidget />
                                <GoalsActions />
                            </div>
                            <div className='flex items-start justify-between gap-20 p-5'>
                                <div className='w-[633px]'>
                                    <TopExpiredGoalsWidget />
                                    <TopActiveGoalsWidget />
                                    <TopRitualGoalsWidget />
                                    <NoGoalsInfo />
                                </div>
                                <div className='h-[290px] w-[400px]'>
                                    <NoSprintsInfo />
                                </div>
                                <CreateNewTaskWidget />
                            </div>
                        </div>
                    </div>
                    <DbAchievement />
                </div>
            )}
        </div>
    )
})
