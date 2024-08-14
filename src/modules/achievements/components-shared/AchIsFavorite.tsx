import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IconHeart } from '@/assets/icons/IconHeart'
import { ReactNode } from 'react'
import { useUpdateAchIsFavorite } from '../services/update-ach-is-favorite/useUpdateAchIsFavorite'

export const AchIsFavorite: React.FC<{ id: string; isFavorite: boolean; label?: ReactNode }> = ({
    id,
    isFavorite,
    label,
}) => {
    const { toggleFavorite } = useUpdateAchIsFavorite()

    return (
        <>
            <StyledButton
                id='toggleFavoriteAch'
                error={!!isFavorite}
                variant={isFavorite ? 'contained' : 'text'}
                size={'small'}
                onClick={() => toggleFavorite({ id, isFavorite: !isFavorite })}
                startIcon={<IconHeart className='mb-0.5 h-6 w-6 opacity-70 hover:opacity-100' />}
            >
                {label}
            </StyledButton>
            {!label && <XTooltip anchorSelect='#toggleFavoriteAch'>{isFavorite ? 'Unfavorite' : 'Favorite'}</XTooltip>}
        </>
    )
}
