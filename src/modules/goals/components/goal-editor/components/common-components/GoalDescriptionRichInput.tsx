import { XRte } from '@/components-x/x-rte/XRte'
import { FormLabel } from '@/components/form/FormLabel'
import { cn } from '@/helpers/cn'
import { useGoalEditor$ } from '../../stores/useGoalEditor.store'
import { useFormikContext } from 'formik'
import { IGoalSchema } from '@/modules/goals/shared-service'

export const GoalDescriptionRichInput = () => {
    const { viewMode } = useGoalEditor$()
    const formikContext = useFormikContext<IGoalSchema>()

    if (viewMode && !formikContext.values.description.length) return null

    /* Fixing ReactQuill  */
    /* https://github.com/zenoamaro/react-quill/issues/911 */
    /* In react-quill text editor move next line using Enter kay, need to press Enter kay two time. */
    // const [val, setVal] = useState('')

    // useEffect(() => {
    //     setVal(value)
    // }, [hide, value])

    return (
        <div>
            <FormLabel title='Description' />
            <XRte
                className={cn(viewMode && 'view-mode', '[&_.ql-editor]:!min-h-fit [&_.ql-editor]:!max-h-fit')}
                content={formikContext.values.description}
                onChangeContent={(content) => formikContext.setFieldValue('description', content)}
                modules={viewMode ? { toolbar: [] } : undefined}
                readOnly={viewMode}
            />
        </div>
    )
}
