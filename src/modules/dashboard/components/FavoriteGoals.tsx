import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Goal } from './goal/Goal'

export const FavoriteGoals: React.FC = observer(() => {
    const {
        goals$: { favoriteGoals, favoriteGoalsFilter },
    } = useRootStore()

    return favoriteGoalsFilter && favoriteGoals.length ? (
        <div className='flex flex-col'>
            <h3 className='flex pb-4 font-mono font-bold'>
                <span>💕</span>({favoriteGoals.length})
            </h3>
            <div className='flex flex-wrap gap-8 pb-4'>
                {favoriteGoals.map((goal) => (
                    <Goal key={goal.id} goal={goal} />
                ))}
            </div>
        </div>
    ) : null
})
