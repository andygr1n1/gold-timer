import { Form } from 'formik'
import { GoalEditorFormFooter } from './goal-editor-form-footer/GoalEditorFormFooter'
import { GoalEditorToolbar } from './goal-editor-toolbar/GoalEditorToolbar'
import { GoalEditorDetails } from './goal-editor-details/GoalEditorDetails'
import { GoalTitleInput } from './goal-editor-form-items/GoalTitleInput'
import { GoalSloganInput } from './goal-editor-form-items/GoalSloganInput'
import { GoalDescriptionRichInput } from './goal-editor-form-items/GoalDescriptionRichInput'
import { GoalCreatedAt } from './goal-editor-form-items/GoalCreatedAt'
import { GoalFinishCalendarInput } from './goal-editor-form-items/GoalFinishCalendarInput'
import { GoalEditorRitual } from './goal-editor-ritual/GoalEditorRitual'
import { useInitGoalEditorForm } from '../hooks/useInitGoalEditorForm.hook'
import { useGoalEditorFormInitialValues } from '../hooks/useGoalEditorFormInitialValues.hook'
import { IconInfiniteLoading } from '@/assets/icons'

export const GoalEditorForm = () => {
    const { isLoading } = useGoalEditorFormInitialValues()
    useInitGoalEditorForm()

    return (
        <Form>
            {isLoading && (
                <div className='w-full h-full z-[100] bg-global-bg-plasma left-0 flex items-center duration-300 justify-center top-0 fixed'>
                    <IconInfiniteLoading className='w-20 h-20 text-blue-500 duration-300' />
                </div>
            )}
            <GoalEditorToolbar />
            <GoalEditorDetails />
            <div className='flex flex-col gap-4 py-2'>
                <GoalTitleInput />
                <GoalSloganInput />
                <GoalDescriptionRichInput />
                <GoalCreatedAt />
                <GoalFinishCalendarInput />
                {/*  */}
                <GoalEditorRitual />
            </div>
            <GoalEditorFormFooter />
        </Form>
    )
}
