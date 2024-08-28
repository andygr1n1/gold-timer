import { StyledButton } from '@/components/buttons/StyledButton'
import { IconHeart } from '@/assets/icons/IconHeart'
import { useFormikContext } from 'formik'
import { type INoteSchema } from '@/modules/notes/shared-services/types'

export const ToggleFavoriteNewNote = () => {
    const formikContext = useFormikContext<INoteSchema>()
    const isFavorite = formikContext.values.is_favorite
    return (
        <>
            <StyledButton
                id='toggleFavoriteNote'
                error={!!isFavorite}
                variant={isFavorite ? 'contained' : 'text'}
                size={'small'}
                onClick={() => {
                    formikContext.setFieldValue('is_favorite', !isFavorite)
                }}
                startIcon={<IconHeart className='mb-0.5 h-6 w-6 opacity-70 hover:opacity-100' />}
            />
        </>
    )
}
