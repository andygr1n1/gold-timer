import { useRootStore } from '@/StoreProvider'
import { Divider } from 'antd'
import { observer } from 'mobx-react-lite'
import { Goal } from './goal/Goal'

export const FavoriteGoals: React.FC = observer(() => {
    const {
        goals$: { favoriteGoals, favoriteGoalsFilter },
    } = useRootStore()

    return favoriteGoalsFilter && favoriteGoals.length ? (
        <div className='flex flex-col bg-rose-50  p-2'>
            <h3 className='font-kzen flex pb-4 font-bold'>
                <span>💕</span>({favoriteGoals.length})
            </h3>
            <div className='flex flex-wrap gap-8 pb-4'>
                {favoriteGoals.map((goal) => (
                    <Goal key={goal.id} goal={goal} />
                ))}
            </div>
            <div className='font-kzen font-bold text-rose-300'>{`Favorites <--`}</div>
            <Divider className='m-0 bg-rose-300 p-1' />
        </div>
    ) : null
})
