import { IGoal$ } from '@/mst/types'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const FavoriteGoalTrigger: React.FC<{ goal: IGoal$ }> = observer(({ goal }) => {
    const { favoriteGoal, is_favorite } = goal
    return (
        <Icon
            icon={is_favorite ? 'ic:outline-favorite' : 'ic:baseline-favorite-border'}
            width={16}
            height={16}
            className='cursor-pointer text-red-700 transition-colors duration-300 hover:text-red-600'
            onClick={(event) => {
                event.stopPropagation()
                favoriteGoal()
            }}
        />
    )
})
