import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Goal } from './goal/Goal'

export const ActiveGoals: React.FC = observer(() => {
    const {
        goals$: { activeGoals, activeGoalsChecked },
    } = useRootStore()

    return activeGoalsChecked ? (
        <div className='flex flex-col'>
            <h3 className='flex pb-4 font-mono font-bold'>
                <span>Active</span>({activeGoals.length})
            </h3>
            <div className='flex flex-wrap gap-5 pb-4'>
                {activeGoals.map((goal) => (
                    <Goal key={goal.id} goal={goal} />
                ))}
            </div>
        </div>
    ) : null
})
