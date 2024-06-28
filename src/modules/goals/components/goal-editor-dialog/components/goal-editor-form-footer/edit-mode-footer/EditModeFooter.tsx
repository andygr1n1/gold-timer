import { StyledButton } from '@/components/buttons/StyledButton'
import { useFormikContext } from 'formik'
import { IGoalSchema } from '@/modules/goals/shared-service'
import { IconInfiniteLoading } from '@/assets/icons'

export const EditModeFooter = () => {
    const formikContext = useFormikContext<IGoalSchema>()

    return (
        <div className='mt-10 flex w-full items-center justify-center gap-6'>
            <div className='relative'>
                <StyledButton
                    rounded
                    type='submit'
                    disabled={formikContext.isSubmitting}
                    size='extraLarge'
                    className='z-10 !min-w-[200px]'
                >
                    {!formikContext.isSubmitting ? 'Save' : <IconInfiniteLoading className='w-6 h-6' />}
                </StyledButton>
            </div>
        </div>
    )
}
