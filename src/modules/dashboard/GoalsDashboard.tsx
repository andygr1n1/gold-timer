import { RdLoader } from '@/components/loader/RdLoader'
import { GoalsTopbar } from '@/components/topbar/Topbar'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useRootStore } from '../../StoreProvider'
import { DbAchievement } from './components/dashboard-achievements/DbAchievements'
import { GoalsDashboardSlider } from './components/goals-dashboard-slider/GoalsDashboardSlider'
import { GoalsActions } from './components/goals-actions/GoalsActions'
import { FavoriteGoalsWidget } from './components/favorite-goals-widget/FavoriteGoalsWidget'
import { GoalsButtonsOverviewWidget } from './components/goals-buttons-overview-widget/GoalsButtonsOverviewWidget'
import { TopActiveGoalsWidget } from './components/top-active-goals-widget/TopActiveGoalsWidget'
import { TopRitualGoalsWidget } from './components/top-ritual-goals-widget/TopRitualGoalsWidget'
import { TopExpiredGoalsWidget } from './components/top-expired-goals-widget/TopExpiredGoalsWidget'

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
                                <div>
                                    <TopExpiredGoalsWidget />
                                    <TopActiveGoalsWidget />
                                    <TopRitualGoalsWidget />
                                </div>
                                <GoalsButtonsOverviewWidget />
                            </div>

                            {/* {goals_checked_list_filter.length && goals.length ? (
                                <div className='relative flex  flex-auto flex-col gap-5 p-5 '>
                                    <FavoriteGoals />
                                    <ExpiredGoals />
                                    <ActiveGoals />
                                    <RitualGoals />
                                    <FrozenGoals />
                                    <CompletedGoals />
                                </div>
                            ) : (
                                <div className='font-xl flex h-full w-full animate-opacity items-center justify-center font-mono font-bold'>
                                    Nothing to show...
                                </div>
                            )} */}
                        </div>
                    </div>
                    <DbAchievement />
                </div>
            )}
        </div>
    )
})
