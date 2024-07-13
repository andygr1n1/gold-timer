import { Form } from 'formik'
import { GoalEditorToolbar } from './goal-editor-toolbar/GoalEditorToolbar'
import { GoalEditorDetails } from './goal-editor-details/GoalEditorDetails'
import { useInitGoalEditorForm } from '../hooks/useInitGoalEditorForm'
import { useGoalEditorFormInitialValues } from '../hooks/useGoalEditorFormInitialValues'
import { IconInfiniteLoading } from '@/assets/icons'
import { GoalEditorTabs } from './goal-editor-tabs/GoalEditorTabs'

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
            <GoalEditorTabs />
        </Form>
    )
}
