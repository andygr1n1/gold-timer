import { IGoalSchema } from '@/modules/goals/shared-service'
import { Formik, Form } from 'formik'
import { GoalEditorFormFooter } from './goal-editor-form-footer/GoalEditorFormFooter'
import { GoalEditorToolbar } from './goal-editor-toolbar/GoalEditorToolbar'
import { GoalDetails } from './common-components/GoalDetails'
import { GoalTitleInput } from './common-components/GoalTitleInput'
import { GoalSloganInput } from './common-components/GoalSloganInput'
import { GoalDescriptionRichInput } from './common-components/GoalDescriptionRichInput'
import { GoalCreatedAt } from './common-components/GoalCreatedAt'
import { GoalFinishCalendarInput } from './common-components/GoalFinishCalendarInput'
import { GoalRitualIntervalInput } from './common-components/GoalRitualIntervalInput'
import { useGoalEditorFormInitialValues } from '../hooks/useGoalEditorFormInitialValues.hook'
import { useGoalEditorFormOnSubmit } from '../hooks/useGoalEditorFormOnSubmit.hook'
import { useGoalEditorFormOnValidate } from '../hooks/useGoalEditorFormOnValidate.hook'

/**
 * @goalId toggle between new goal and edit goal
 */
export const GoalEditorForm = () => {
    const { onSubmit } = useGoalEditorFormOnSubmit()
    const { validate } = useGoalEditorFormOnValidate()
    const { initialValues } = useGoalEditorFormInitialValues()

    return (
        <Formik<IGoalSchema> enableReinitialize initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
            <Form>
                <GoalEditorToolbar />
                <GoalDetails />
                <div className='flex flex-col gap-4 py-2'>
                    <GoalTitleInput />
                    <GoalSloganInput />
                    <GoalDescriptionRichInput />
                    <GoalCreatedAt />
                    <GoalFinishCalendarInput />
                    <GoalRitualIntervalInput />
                </div>
                <GoalEditorFormFooter />
            </Form>
        </Formik>
    )
}
