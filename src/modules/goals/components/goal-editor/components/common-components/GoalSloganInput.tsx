import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { useGoalEditor$ } from '../../stores/useGoalEditor.store'
import { useFormikContext } from 'formik'
import { IGoalSchema } from '@/modules/goals/shared-service'

export const GoalSloganInput = () => {
    const { viewMode } = useGoalEditor$()
    const formikContext = useFormikContext<IGoalSchema>()

    if (viewMode && !formikContext.values.slogan.length) return null

    return (
        <div>
            <FormLabel title='Slogan' />
            <XInput
                data-testid='goal-slogan-input'
                disabled={viewMode}
                readOnly={viewMode}
                value={formikContext.values.slogan}
                name='slogan'
                onChange={formikContext.handleChange}
                error={formikContext.touched.slogan && Boolean(formikContext.errors.slogan)}
                errorMessage={formikContext.errors.slogan}
            />
        </div>
    )
}
