import { XRte } from '@/components-x/x-rte/XRte'
import { FormLabel } from '@/components/form/FormLabel'
import { useGoalEditor$ } from '../../stores/goal-editor-store/useGoalEditor.store'
import { useFormikContext } from 'formik'
import { IGoalSchema } from '@/modules/goals/shared-service'

export const GoalDescriptionRichInput = () => {
    const { viewMode } = useGoalEditor$()
    const formikContext = useFormikContext<IGoalSchema>()

    if (viewMode && !formikContext.values.description.length) return null

    /* Fixing ReactQuill  */
    // const [val, setVal] = useState('')

    // useEffect(() => {
    //     setVal(value)
    // }, [hide, value])

    return (
        <div>
            <FormLabel title='Description' />
            <XRte
                content={formikContext.values.description}
                onChangeContent={(content) => formikContext.setFieldValue('description', content)}
                readOnly={viewMode}
                placeholder='Description'
            />
        </div>
    )
}
