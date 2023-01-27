import { RdLoader } from '@/components/loader/RdLoader'
import { GoalsTopbar } from '@/components/topbar/Topbar'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useRootStore } from '../../StoreProvider'
import { ActiveGoals } from './components/ActiveGoals'
import { CompletedGoals } from './components/CompletedGoals'
import { DbAchievements } from './components/dashboard-achievements/DbAchievements'
import { ExpiredGoals } from './components/ExpiredGoals'
import { FavoriteGoals } from './components/FavoriteGoals'
import { FrozenGoals } from './components/FrozenGoals'
import { GoalsGlobalSearch } from './components/GoalsGlobalSearch'
import { RitualGoals } from './components/RitualGoals'

export const GoalsDashboard: React.FC = observer(() => {
    const [loading, setLoading] = useState(true)

    const {
        fetchGoals,
        goals$: { goals_checked_list_filter, goals },
    } = useRootStore()

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
                        <div className='flex h-[calc(100vh-105px)] w-full flex-col overflow-auto'>
                            <GoalsGlobalSearch />
                            {goals_checked_list_filter.length && goals.length ? (
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
                            )}
                        </div>
                    </div>
                    <DbAchievements />
                </div>
            )}
        </div>
    )
})
