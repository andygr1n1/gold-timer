import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
// import { useMutateGoalFavorite } from '@/modules/goals/service'
import { IconHeart } from '@/assets/icons/IconHeart'
import { ReactNode } from 'react'

export const ToggleFavorite: React.FC<{ goalId: string; isFavorite: boolean; label?: ReactNode }> = ({
    // goalId,
    isFavorite,
    label,
}) => {
    // const mutationGoalFavorite = useMutateGoalFavorite()

    return (
        <>
            <StyledButton
                id='toggleFavoriteGoal'
                error={!!isFavorite}
                variant={isFavorite ? 'contained' : 'text'}
                size={'small'}
                onClick={() => {
                    // mutationGoalFavorite.mutate({ goal_id: goalId, is_favorite: !isFavorite })
                }}
                startIcon={<IconHeart className='mb-0.5 h-6 w-6 opacity-70 hover:opacity-100' />}
            >
                {label}
            </StyledButton>
            {!label && <XTooltip anchorSelect='#toggleFavoriteGoal'>{isFavorite ? 'Unfavorite' : 'Favorite'}</XTooltip>}
        </>
    )
}
