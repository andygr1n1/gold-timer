import { StyledButton } from '@/components/buttons/StyledButton'
import { IconInfiniteLoading } from '@/assets/icons'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { useNoteEditorFormSubmit } from './useNoteEditorFormSubmit'

export const NoteEditorFormSubmit: React.FC = () => {
    const { disabled, OkText, tooltipText, isSubmitting } = useNoteEditorFormSubmit()

    return (
        <div className='relative'>
            <StyledButton
                variant='outlined'
                type='submit'
                disabled={disabled || isSubmitting}
                size='small'
                className='z-10'
            >
                {!isSubmitting ? OkText : <IconInfiniteLoading className='w-6 h-6' />}
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
