import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { IGoalSlideSchema } from '@/modules/goals-slides/service/types'
import { useFormikContext } from 'formik'

export const GoalSlideTItleFormItem: React.FC = () => {
    const formikContext = useFormikContext<IGoalSlideSchema>()
    const { title } = formikContext.values

    return (
        <div className='w-full flex flex-col gap-2 mb-10'>
            <FormLabel title='Title:' />
            <XInput
                name='title'
                placeholder='Title'
                value={title}
                onChange={formikContext.handleChange}
                error={formikContext.touched.title && Boolean(formikContext.errors.title)}
                errorMessage={formikContext.errors.title}
                className='!w-full'
            />
        </div>
    )
}
