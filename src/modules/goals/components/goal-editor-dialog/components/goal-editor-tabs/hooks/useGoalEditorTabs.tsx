import { type IGoalSchema } from '@/modules/goals/shared-service'
import { type TabsProps } from 'antd'
import { GoalInfo } from '../components/goal-info/GoalInfo'
import { GoalRitual } from '../components/goal-ritual/GoalRitual'
import { useGoalEditor$ } from '../../../stores/goal-editor-store/useGoalEditor.store'
import { useFormikContext } from 'formik'
import { calculateIsRitualWithPower } from '@/modules/goals/helpers/optimizeActiveGoalsData'
import { GoalRelation } from '../components/goal-relation/GoalRelation'
import { GoalAttachments } from '../components/goal-attachments/GoalAttachments'
import { GoalStory } from '../components/goal-story/GoalStory'

export const useGoalEditorTabs = () => {
    const { viewMode, editMode } = useGoalEditor$()
    const formikContext = useFormikContext<IGoalSchema>()
    const isRitual = calculateIsRitualWithPower(formikContext.values) && viewMode

    const goalEditorTabs: TabsProps['items'] = [
        { key: '1', label: 'Info', children: <GoalInfo /> },
        { key: '2', label: 'Story', children: <GoalStory /> },
        { key: '3', label: 'Attachments', children: <GoalAttachments /> },
        // { key: '4', label: 'Status', children: 'Goal status' },
        // {
        //     key: '5',
        //     label: 'Settings',
        //     children: 'Goal status',
        // },
    ]

    if (editMode || isRitual) {
        goalEditorTabs.push({ key: '4', label: 'Ritual', children: <GoalRitual />, active: isRitual })
    }

    goalEditorTabs.push({ key: '5', label: 'Relation', children: <GoalRelation />, active: isRitual })

    return { goalEditorTabs }
}
