import { useGoalsStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import favoriteIcon from '@/assets/heart-favorite.svg'
import clsx from 'clsx'
import styles from './GoalFormIsFavoriteOption.module.scss'

export const GoalFormIsFavoriteOption: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()

    if (!new_goal || new_goal?.view_mode || new_goal?.edit_mode) return null

    const { is_favorite, onChangeField, view_mode } = new_goal

    const handleClick = () => {
        if (view_mode) return
        onChangeField('is_favorite', !is_favorite)
    }

    return (
        <button
            onClick={handleClick}
            className={clsx(
                'relative flex h-10 w-10 items-center justify-center bg-transparent',
                !view_mode && 'cursor-pointer',
                !view_mode && styles['favorite'],
            )}
        >
            {is_favorite ? (
                <img
                    src={favoriteIcon}
                    className=' animate-opacity-3 flex h-6 w-6 items-center justify-center bg-transparent duration-300 '
                />
            ) : (
                <Icon
                    icon='ic:baseline-favorite-border'
                    className={clsx(
                        'text-cText animate-opacity-3 h-10 w-10 transition-colors',
                        !view_mode && 'hover:text-red-600',
                    )}
                />
            )}
        </button>
    )
})
