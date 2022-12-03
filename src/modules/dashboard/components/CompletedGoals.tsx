import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Goal } from './goal/Goal'

export const CompletedGoals: React.FC = observer(() => {
    const {
        goals$: { completedGoals, completedGoalsFilter },
    } = useRootStore()

    return completedGoalsFilter ? (
        <div className='flex flex-col'>
            <h3 className='flex pb-4 font-mono font-bold'>
                <span>Completed</span>({completedGoals.length})
            </h3>
            <div className='flex flex-wrap gap-8 pb-4'>
                {completedGoals.map((goal) => (
                    <Goal key={goal.id} goal={goal} />
                ))}
            </div>
        </div>
    ) : null
})
