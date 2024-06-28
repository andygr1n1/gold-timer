import { IGoalSchema } from '@/modules/goals/shared-service'
import { Formik } from 'formik'
import { useGoalEditorFormInitialValues } from '../hooks/useGoalEditorFormInitialValues.hook'
import { useGoalEditorFormOnSubmit } from '../hooks/useGoalEditorFormOnSubmit.hook'
import { useGoalEditorFormOnValidate } from '../hooks/useGoalEditorFormOnValidate.hook'
import { GoalEditorForm } from './GoalEditorForm'

/**
 * @goalId toggle between new goal and edit goal
 */
export const GoalEditor = () => {
    const { onSubmit } = useGoalEditorFormOnSubmit()
    const { validate } = useGoalEditorFormOnValidate()
    const { initialValues } = useGoalEditorFormInitialValues()

    return (
        <Formik<IGoalSchema> enableReinitialize initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
            <GoalEditorForm />
        </Formik>
    )
}
