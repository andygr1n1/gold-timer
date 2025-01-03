import { Form, Formik } from 'formik'
import { GoalsSlides } from '../GoalsSlides'
import { InsertGoalSlideDialogTrigger } from './components/InsertGoalSlideDialogTrigger'
import { type IGoalSlide } from '@/modules/goals-slides/service/types'
import { useGoalSlideEditorFormOnValidate } from '@/modules/goals-slides/hooks/useGoalSlideEditorFormOnValidate.hook'
import { useGoalSlideEditorFormInitialValues } from '@/modules/goals-slides/hooks/useGoalSlideEditorFormInitialValues.hook'
import { InsertGoalSlideDialog } from './components/InsertGoalSlideDialog'
import { useInsertGoalSlide } from '@/modules/goals-slides/hooks/useInsertGoalSlide'

export const InsertGoalSlide: React.FC = () => {
    const { onSubmit } = useInsertGoalSlide()
    const { validate } = useGoalSlideEditorFormOnValidate()
    const { initialValues } = useGoalSlideEditorFormInitialValues()
    return (
        <>
            <Formik<IGoalSlide>
                enableReinitialize
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
            >
                <Form className='flex flex-col gap-5'>
                    <InsertGoalSlideDialogTrigger />
                    <InsertGoalSlideDialog />
                </Form>
            </Formik>
            <GoalsSlides />
        </>
    )
}
