import { StyledButton } from '@/components/buttons/StyledButton'
import { IconInfiniteLoading } from '@/assets/icons'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { useNoteEditorFormSubmit } from './useNoteEditorFormSubmit'

export const StoryEditorFormSubmit: React.FC = () => {
    const { disabled, OkText, tooltipText, isSubmitting } = useNoteEditorFormSubmit()

    return (
        <div className='relative'>
            <StyledButton
                variant='outlined'
                type='submit'
                disabled={disabled || isSubmitting}
                size='small'
                className='z-10'
                startIcon={isSubmitting && <IconInfiniteLoading className='w-6 h-6' />}
            >
                {OkText}
            </StyledButton>
            {disabled && tooltipText && (
                <div
                    id='disabledTooltip'
                    className='pointer-events-auto absolute left-0 top-0
                    z-20 h-full w-full rounded-lg bg-transparent'
                />
            )}
            {disabled && tooltipText && <XTooltip anchorSelect='#disabledTooltip'>{tooltipText}</XTooltip>}
        </div>
    )
}
