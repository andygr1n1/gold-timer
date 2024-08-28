import { StyledButton } from '@/components/buttons/StyledButton'
import { type IGoalSlideSchema } from '@/modules/goals-slides/service/types'
import { useFormikContext } from 'formik'

export const GoalSlideFormFooter: React.FC = () => {
    const formikContext = useFormikContext<IGoalSlideSchema>()
    return (
        <StyledButton
            disabled={formikContext.isSubmitting}
            className='w-full'
            onClick={() => formikContext.handleSubmit()}
        >
            Save
        </StyledButton>
    )
}
