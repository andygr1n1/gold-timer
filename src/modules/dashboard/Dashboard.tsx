import { RdLoader } from '@/components/loader/RdLoader'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useRootStore } from '../../StoreProvider'
import { Goal } from './goal/Goal'

export const Dashboard: React.FC = observer(() => {
    const [loading, setLoading] = useState(true)

    const {
        fetchGoals,
        goals$: { goals },
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
        <div className='module-wrapper'>
            {loading ? (
                <RdLoader loading={loading} />
            ) : (
                <div className='flex h-full flex-wrap  gap-5 overflow-auto'>
                    {goals.map((goal) => (
                        <Goal key={goal.id} goal={goal} />
                    ))}
                </div>
            )}
        </div>
    )
})
