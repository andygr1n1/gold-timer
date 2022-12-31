import { RdLoader } from '@/components/loader/RdLoader'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useRootStore } from '../../StoreProvider'
import { Achievements } from './components/achievements/Achievements'
import { ActiveGoals } from './components/ActiveGoals'
import { CompletedGoals } from './components/CompletedGoals'
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
            }, 1000)
        })
    }, [])

    return (
        <div className='module-wrapper items-center'>
            {loading ? (
                <RdLoader loading={loading} />
            ) : (
                <>
                    <Achievements />
                    <div className='flex w-full'>
                        <div className='hidden w-full min-w-[300px] flex-auto flex-col bg-white xl:flex'></div>
                        <div className='bg-white'>
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
                        <div className='hidden w-full min-w-[300px] flex-auto flex-col bg-white xl:flex'></div>
                    </div>
                </>
            )}
        </div>
    )
})
