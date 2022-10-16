import { RdLoader } from '@/components/loader/RdLoader'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { useRootStore } from '../../StoreProvider'
import { GoalCreatorIndex } from './goal-creator/GoalCreatorIndex'
import { Goal } from './goal/Goal'

export const Dashboard: React.FC = observer(() => {
    const [loading, setLoading] = useState(true)

    const {
        fetchGoals,
        goals$: { activeGoals, frozenGoals },
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
                <div className='flex h-full flex-auto gap-5 overflow-auto'>
                    <div className='border-r-solid flex h-full w-full flex-col border border-r-4 border-spaceblue'>
                        <h3 className='flex gap-2 pb-2 font-monoIitalic font-semibold'>
                            🎯<span>Active</span>({activeGoals.length})
                        </h3>
                        <div className='flex  min-h-[240px] flex-wrap  gap-5 overflow-auto rounded-lg border-2 border-gray-50 shadow-md'>
                            {activeGoals.map((goal) => (
                                <Goal key={goal.id} goal={goal} />
                            ))}
                        </div>
                    </div>
                    <div className='flex h-full w-[300px] flex-col'>
                        <h3 className='flex gap-2 pb-2 font-monoIitalic font-semibold'>
                            ⌛<span>Frozen</span>({frozenGoals.length})
                        </h3>
                        <div className='flex h-full flex-wrap gap-5  overflow-auto '>
                            {frozenGoals.map((goal) => (
                                <Goal key={goal.id} goal={goal} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <GoalCreatorIndex />
        </div>
    )
})
