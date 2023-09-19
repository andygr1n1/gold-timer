import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Goal } from './goal/Goal'

export const ActiveGoals: React.FC = observer(() => {
    const {
        goals$: { activeGoals, activeGoalsFilter },
    } = useRootStore()

    return activeGoalsFilter ? (
        <div className='flex flex-col'>
            <h3 className='font-droid flex pb-4 font-bold'>
                <span>Active</span>({activeGoals.length})
            </h3>
            <div className='flex flex-wrap gap-8 pb-4'>
                {activeGoals.map((goal) => (
                    <Goal key={goal.id} goal={goal} />
                ))}
            </div>
        </div>
    ) : null
})
