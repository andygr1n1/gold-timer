import { FormLabel } from '@/components/form/FormLabel'
import { useGoalEditor$ } from '../../stores/goal-editor-store/useGoalEditor.store'
import { useFormikContext } from 'formik'
import { IGoalSchema } from '@/modules/goals/shared-service'
import { useGoalData } from '../../hooks/useGoalData'
import { KzenEditor } from '@/components-x/x-rte'

export const GoalDescriptionRichInput = () => {
    const { viewMode } = useGoalEditor$()
    const formikContext = useFormikContext<IGoalSchema>()
    const { isLoading, data } = useGoalData()
    if (viewMode && !formikContext.values.description.length) return null

    return (
        <div>
            <FormLabel title='Description' />
            <KzenEditor
                showToolbar={!viewMode}
                isLoading={isLoading}
                content={data?.description}
                onChangeContent={(content) => formikContext.setFieldValue('description', content)}
                readOnly={viewMode}
                placeholder='Description'
            />
        </div>
    )
}
