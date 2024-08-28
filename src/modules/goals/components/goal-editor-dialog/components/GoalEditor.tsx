import { type IGoalSchema } from '@/modules/goals/shared-service'
import { Formik } from 'formik'
import { useGoalEditorFormInitialValues } from '../hooks/useGoalEditorFormInitialValues'
import { useGoalEditorFormOnSubmit } from '../hooks/on-submit/useGoalEditorFormOnSubmit'
import { useGoalEditorFormOnValidate } from '../hooks/useGoalEditorFormOnValidate'
import { GoalEditorForm } from './GoalEditorForm'

/**
 * @goalId toggle between new goal and edit goal
 */
const GoalEditor = () => {
    const { onSubmit } = useGoalEditorFormOnSubmit()
    const { validate } = useGoalEditorFormOnValidate()
    const { initialValues } = useGoalEditorFormInitialValues()

    return (
        <Formik<IGoalSchema> enableReinitialize initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
            <GoalEditorForm />
        </Formik>
    )
}

export default GoalEditor
