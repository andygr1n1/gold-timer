import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Goal } from './goal/Goal'

export const RitualGoals: React.FC = observer(() => {
    const {
        goals$: { ritualGoals, ritualGoalsFilter },
    } = useRootStore()

    return ritualGoalsFilter && ritualGoals.length ? (
        <div className='flex flex-col'>
            <h3 className='font-kzen flex pb-4 font-bold'>
                <span>Ritual</span>({ritualGoals.length})
            </h3>
            <div className='flex flex-wrap gap-8 pb-4'>
                {ritualGoals.map((goal) => (
                    <Goal key={goal.id} goal={goal} />
                ))}
            </div>
        </div>
    ) : null
})
