import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { ActiveGoal } from './active-goal/ActiveGoal'

export const ActiveGoals: React.FC = observer(() => {
    const {
        goals$: { activeGoals, activeGoalsFilter },
    } = useRootStore()

    return activeGoalsFilter ? (
        <div className='flex flex-col'>
            <h3 className='flex pb-4 font-mono font-bold'>
                <span>Active</span>({activeGoals.length})
            </h3>
            <div className='flex flex-wrap gap-8 pb-4'>
                {activeGoals.map((goal) => (
                    <ActiveGoal key={goal.id} goal={goal} />
                ))}
            </div>
        </div>
    ) : null
})
