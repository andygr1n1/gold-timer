import { type IGoalSchema } from '@/modules/goals/shared-service'
import { useFormikContext, type FormikContextType } from 'formik'
import { useGoalEditor$ } from '../../../stores/goal-editor-store/useGoalEditor.store'
import { GoalTitleInput } from './GoalTitleInput'

export const GoalTitleInputIndex = () => {
    const { viewMode } = useGoalEditor$()
    const formikContext: FormikContextType<IGoalSchema> = useFormikContext<IGoalSchema>()

    return (
        <GoalTitleInput
            disabled={viewMode}
            readOnly={viewMode}
            value={formikContext.values.title}
            onChange={formikContext.handleChange}
            error={formikContext.touched.title && Boolean(formikContext.errors.title)}
            errorMessage={formikContext.errors.title}
        />
    )
}
