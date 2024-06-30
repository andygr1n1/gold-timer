import { Tabs } from 'antd'
import { GoalEditorFormSubmit } from '../goal-editor-form-submit/GoalEditorFormSubmit'
import { useGoalEditorTabs } from './hooks/useGoalEditorTabs'

export const GoalEditorTabs: React.FC = () => {
    const { goalEditorTabs } = useGoalEditorTabs()

    return (
        <Tabs
            className='[&_.ant-tabs-nav::before]:border-slate-500 '
            tabBarStyle={{
                position: 'sticky',
                top: -20,
                background: 'var(--colors-global-2-bg-plasma)',
                zIndex: 10,
            }}
            defaultActiveKey='1'
            items={goalEditorTabs}
            tabBarExtraContent={<GoalEditorFormSubmit />}
            // onChange={onChange}
            indicator={{ align: 'center' }}
        />
    )
}
