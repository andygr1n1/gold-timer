import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { IGoalSchema } from '@/modules/goals/shared-service'
import { useFormikContext } from 'formik'
import { useGoalEditor$ } from '../../stores/goal-editor-store/useGoalEditor.store'

export const GoalTitleInput = () => {
    const { viewMode } = useGoalEditor$()
    const formikContext = useFormikContext<IGoalSchema>()

    return (
        <div>
            <FormLabel title='Title' />
            <XInput
                data-testid='goal-title-input'
                disabled={viewMode}
                readOnly={viewMode}
                autoFocus={true}
                value={formikContext.values.title}
                name='title'
                placeholder='Title'
                onChange={formikContext.handleChange}
                error={formikContext.touched.title && Boolean(formikContext.errors.title)}
                errorMessage={formikContext.errors.title}
            />
        </div>
    )
}
