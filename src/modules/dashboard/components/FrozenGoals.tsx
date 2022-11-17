import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Goal } from './goal/Goal'
export const FrozenGoals: React.FC = observer(() => {
    const {
        goals$: { frozenGoals, frozenGoalsFilter: frozenGoalsChecked },
    } = useRootStore()

    return frozenGoalsChecked ? (
        <div className='flex flex-col'>
            <h3 className='flex pb-4 font-mono font-bold'>
                <span>Frozen</span>({frozenGoals.length})
            </h3>
            <div className='flex flex-wrap gap-5 pb-4'>
                {frozenGoals.map((goal) => (
                    <Goal key={goal.id} goal={goal} />
                ))}
            </div>
        </div>
    ) : null
})
