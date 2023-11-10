import { useGoalsStore } from '@/StoreProvider'
import { StyledButton } from '@/components/buttons/StyledButton'
import clsx from 'clsx'
import { observer } from 'mobx-react-lite'

export const GoalsFavorites: React.FC = observer(() => {
    const {
        goals_filter$: { show_favorites, onChangeField },
    } = useGoalsStore()

    return (
        <StyledButton
            onClick={() => {
                onChangeField('show_favorites', !show_favorites)
            }}
            variant='text'
            className={clsx(
                'min-w-[100px] !text-red-600 hover:opacity-100',
                show_favorites ? 'opacity-100' : 'opacity-50',
            )}
        >
            Favorites
        </StyledButton>
    )
})
