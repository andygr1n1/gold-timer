import { useGoalsStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import favoriteIcon from '@/assets/heart-favorite.svg'

export const GoalFormIsFavoriteOption: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()

    if (!new_goal) return null

    const { is_favorite, onChangeField } = new_goal

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        onChangeField('is_favorite', !is_favorite)
    }

    return (
        <button onClick={handleClick} className='flex h-10 w-10 cursor-pointer items-center justify-center'>
            {is_favorite ? (
                <img
                    src={favoriteIcon}
                    className=' animate-opacity-3 flex h-6 w-6 items-center justify-center duration-300'
                />
            ) : (
                <Icon
                    icon='ic:baseline-favorite-border'
                    className='text-cText animate-opacity-3 h-10 w-10 transition-colors hover:text-red-600'
                />
            )}
        </button>
    )
})
