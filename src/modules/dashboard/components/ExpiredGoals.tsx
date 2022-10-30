import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Goal } from './goal/Goal'

export const ExpiredGoals: React.FC = observer(() => {
    const {
        goals$: { activeExpiredGoals, activeGoalsFilter },
    } = useRootStore()

    return activeGoalsFilter ? (
        <div className='flex flex-col'>
            <h3 className='flex pb-4 font-mono font-bold'>
                <span>Expired</span>({activeExpiredGoals.length})
            </h3>
            <div className='flex flex-wrap gap-5 pb-4'>
                {activeExpiredGoals.map((goal) => (
                    <Goal key={goal.id} goal={goal} />
                ))}
            </div>
        </div>
    ) : null
})
