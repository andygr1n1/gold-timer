import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { ExpiredGoal } from './expired-goal/ExpiredGoal'

export const ExpiredGoals: React.FC = observer(() => {
    const {
        goals$: { activeExpiredGoals, activeGoalsFilter },
    } = useRootStore()

    return activeGoalsFilter ? (
        <div className='flex flex-col'>
            <h3 className='flex pb-4 font-mono font-bold'>
                <span>Expired</span>({activeExpiredGoals.length})
            </h3>
            <div className='flex flex-wrap gap-8 pb-4'>
                {activeExpiredGoals.map((goal) => (
                    <ExpiredGoal key={goal.id} goal={goal} />
                ))}
            </div>
        </div>
    ) : null
})
