import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IconHeart } from '@/assets/icons/IconHeart'
import { type ReactNode } from 'react'
import { useUpdateGoalIsFavorite } from '@/modules/goals/shared-components/goal-is-favorite/hook/useUpdateGoalIsFavorite.hook'
import { cn } from '@/helpers/cn'

export const GoalIsFavorite: React.FC<{ goalId: string; isFavorite: boolean; label?: ReactNode }> = ({
    goalId,
    isFavorite,
    label,
}) => {
    const { toggleFavorite } = useUpdateGoalIsFavorite()

    return (
        <>
            <StyledButton
                id='toggleFavoriteGoal'
                variant={isFavorite ? 'contained' : 'text'}
                size={'small'}
                onClick={() => toggleFavorite({ goalId, isFavorite: !isFavorite })}
                startIcon={<IconHeart className={cn('mb-0.5 h-6 w-6 opacity-70 hover:opacity-100')} />}
                className={cn(isFavorite && '!bg-pink-500')}
            >
                {label}
            </StyledButton>
            {!label && <XTooltip anchorSelect='#toggleFavoriteGoal'>{isFavorite ? 'Unfavorite' : 'Favorite'}</XTooltip>}
        </>
    )
}
