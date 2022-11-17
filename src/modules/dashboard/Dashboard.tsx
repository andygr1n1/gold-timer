import { RdLoader } from '@/components/loader/RdLoader'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useRootStore } from '../../StoreProvider'
import { ActiveGoals } from './components/ActiveGoals'
import { ActiveHotGoals } from './components/ActiveHotGoals'
import { CompletedGoals } from './components/CompletedGoals'
import { DashboardFilter } from './components/DashboardFilter'
import { ExpiredGoals } from './components/ExpiredGoals'
import { FrozenGoals } from './components/FrozenGoals'

export const Dashboard: React.FC = observer(() => {
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
                    {goals_checked_list_filter.length && goals.length ? (
                        <div className='relative flex flex-auto flex-col gap-5 p-5 xl:w-[1200px]'>
                            <ExpiredGoals />
                            <ActiveHotGoals />
                            <ActiveGoals />
                            <Divider />
                            <FrozenGoals />
                            <Divider />
                            <CompletedGoals />
                            <Divider />
                        </div>
                    ) : (
                        <div className='font-xl flex h-full w-full animate-opacity items-center justify-center font-mono font-bold'>
                            Nothing to show...
                        </div>
                    )}
                    <div className='sticky bottom-0 flex w-full items-center bg-white py-1 px-3'>
                        <DashboardFilter />
                    </div>
                </>
            )}
        </div>
    )
})
