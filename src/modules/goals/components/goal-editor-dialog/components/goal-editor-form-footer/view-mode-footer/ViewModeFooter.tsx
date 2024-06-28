import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useViewModeFooter } from './hooks/useViewModeFooter'
import { useFormikContext } from 'formik'
import { IGoalSchema } from '@/modules/goals/shared-service'
import { IconInfiniteLoading } from '@/assets/icons'

export const ViewModeFooter = () => {
    const { disabled, OkText, tooltipText } = useViewModeFooter()
    const formikContext = useFormikContext<IGoalSchema>()

    return (
        <div className='mt-10 flex w-full items-center justify-center gap-6'>
            <div className='relative'>
                <StyledButton
                    rounded
                    type='submit'
                    disabled={disabled || formikContext.isSubmitting}
                    size='extraLarge'
                    className='z-10 !min-w-[200px]'
                >
                    {!formikContext.isSubmitting ? OkText : <IconInfiniteLoading className='w-6 h-6' />}
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
