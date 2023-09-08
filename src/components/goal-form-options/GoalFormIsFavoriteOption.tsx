import { useGoalsStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { FormLabel } from '../form/FormLabel'

export const GoalFormIsFavoriteOption: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()

    if (!new_goal) return null

    const { is_favorite, onChangeField } = new_goal

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        onChangeField('is_favorite', !is_favorite)
    }

    return (
        <div className='py-2'>
            <FormLabel title='Favorite' />
            {is_favorite ? (
                <button title='Unfavorite' onClick={handleClick} className=' flex items-center justify-center '>
                    <Icon
                        icon='ic:outline-favorite'
                        width={30}
                        height={30}
                        className='cursor-pointer text-red-700 transition-colors duration-300 hover:text-red-600'
                    />
                </button>
            ) : (
                <button title='Favorite' className='flex items-center justify-center' onClick={handleClick}>
                    <Icon
                        icon='ic:baseline-favorite-border'
                        width={30}
                        height={30}
                        className='text-cText cursor-pointer transition-colors duration-300 hover:text-red-600'
                    />
                </button>
            )}
        </div>
    )
})
