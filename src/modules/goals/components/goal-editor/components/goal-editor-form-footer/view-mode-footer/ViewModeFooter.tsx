import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useGoalEditor$ } from '../../../stores/useGoalEditor.store'
import { useViewModeFooter } from './hooks/useViewModeFooter'

export const ViewModeFooter = () => {
    const { onCancel } = useGoalEditor$()
    const { disabled, OkText, tooltipText } = useViewModeFooter()

    return (
        <div className='mt-10 flex w-full items-center justify-center gap-6'>
            <StyledButton
                type='button'
                error
                rounded
                onClick={onCancel}
                variant='outlined'
                size='extraLarge'
                className='!w-28'
            >
                <div className='flex items-center justify-center gap-2'>
                    <div>Return</div>
                </div>
            </StyledButton>
            <div className='relative'>
                <StyledButton
                    rounded
                    type='submit'
                    disabled={disabled}
                    size='extraLarge'
                    className='z-10 !min-w-[112px]'
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
        </div>
    )
}
