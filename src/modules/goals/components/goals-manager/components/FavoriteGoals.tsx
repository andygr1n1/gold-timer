import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { Goal } from './goal/Goal'
import { GoalListStabilizer } from './goal/GoalListStabilizer'

export const FavoriteGoals: React.FC = observer(() => {
    const {
        goals$: { favoriteGoals },
    } = useRootStore()

    if (!favoriteGoals.length) return null

    return (
        <div className='flex w-full flex-col gap-5 md:flex-row md:flex-wrap'>
            {favoriteGoals.map((item) => (
                <Goal key={item.id} goal={item} />
            ))}
            {/* stabilizer */}
            <GoalListStabilizer />
        </div>
    )
})
