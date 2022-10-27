import { RdLoader } from '@/components/loader/RdLoader'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useRootStore } from '../../StoreProvider'
import { ActiveGoals } from './components/ActiveGoals'
import { DashboardFilter } from './components/DashboardFilter'
import { FrozenGoals } from './components/FrozenGoals'

export const Dashboard: React.FC = observer(() => {
    const [loading, setLoading] = useState(true)

    const { fetchGoals } = useRootStore()

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
                    <div className='flex flex-col gap-5 p-5 xl:w-[1200px]'>
                        <ActiveGoals />
                        <Divider />
                        <FrozenGoals />
                    </div>
                    <DashboardFilter />
                </>
            )}
        </div>
    )
})
