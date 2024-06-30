import { IGoalSchema } from "@/modules/goals/shared-service"
import { TabsProps } from "antd"
import { GoalInfo } from "../components/goal-info/GoalInfo"
import { GoalRitual } from "../components/goal-ritual/GoalRitual"
import { useGoalEditor$ } from "../../../stores/goal-editor-store/useGoalEditor.store"
import { useFormikContext } from "formik"
import { calculateIsRitualWithPower } from "@/modules/goals/helpers/optimizeActiveGoalsData"

export const useGoalEditorTabs = () => {
    const { viewMode,editMode } = useGoalEditor$()
    const formikContext = useFormikContext<IGoalSchema>()
    const isRitual = calculateIsRitualWithPower(formikContext.values) && viewMode

    const goalEditorTabs: TabsProps['items'] = [
        { key: '1', label: 'Info', children: <GoalInfo /> },
        // { key: '3', label: 'Relation', children: 'Content of Tab Pane 3' },
        // { key: '4', label: 'Status', children: 'Goal status' },
        // {
        //     key: '5',
        //     label: 'Settings',
        //     children: 'Goal status',
        // },
    ]

    if (editMode || isRitual) {
        goalEditorTabs.push({ key: '2', label: 'Ritual', children: <GoalRitual />, active: isRitual })

    }

    return { goalEditorTabs }
}
