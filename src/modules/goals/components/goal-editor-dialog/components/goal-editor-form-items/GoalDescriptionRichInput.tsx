import { FormLabel } from '@/components/form/FormLabel'
import { useGoalEditor$ } from '../../stores/goal-editor-store/useGoalEditor.store'
import { useFormikContext } from 'formik'
import { type IGoalSchema } from '@/modules/goals/shared-service'
import { useGoalData } from '../../hooks/useGoalData'
import { XTiptap } from '@/components-x/x-tiptap/XTiptap'

export const GoalDescriptionRichInput = () => {
    const { viewMode } = useGoalEditor$()
    const formikContext = useFormikContext<IGoalSchema>()
    const { isLoading, data } = useGoalData()
    if (viewMode && !formikContext.values.description.length) return null

    return (
        <div>
            <FormLabel title='Description' />
            <XTiptap
                // showToolbar={!viewMode}
                isLoading={isLoading}
                content={data?.description || ''}
                onChange={(content) => formikContext.setFieldValue('description', content)}
                readonly={viewMode}
            />
        </div>
    )
}
