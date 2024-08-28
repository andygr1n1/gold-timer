import { Tabs } from 'antd'
import { GoalEditorFormSubmit } from '../goal-editor-form-submit/GoalEditorFormSubmit'
import { useGoalEditorTabs } from './hooks/useGoalEditorTabs'
import { CompleteRitualGoal } from './components/CompleteRitualGoal'
import { type IGoalSchema } from '@/modules/goals/shared-service'
import { useFormikContext } from 'formik'

export const GoalEditorTabs: React.FC = () => {
    const { goalEditorTabs } = useGoalEditorTabs()
    const formikContext = useFormikContext<IGoalSchema>()
    return (
        <Tabs
            className='[&_.ant-tabs-nav::before]:border-slate-500 [&_.ant-tabs-nav]:bg-global-2-bg-plasma [&_.ant-tabs-nav]:sticky'
            tabBarStyle={{
                top: -20,
                // position:'sticky',
                // background: 'var(--colors-global-bg-plasma)',
                zIndex: 10,
            }}
            defaultActiveKey='1'
            items={goalEditorTabs}
            tabBarExtraContent={
                <div className='flex items-center justify-center gap-2'>
                    <GoalEditorFormSubmit />
                    <CompleteRitualGoal goal={formikContext.values} />
                </div>
            }
            // onChange={onChange}
            indicator={{ align: 'center' }}
        />
    )
}
