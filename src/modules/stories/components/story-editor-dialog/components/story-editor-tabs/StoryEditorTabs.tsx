import { Tabs } from 'antd'
import { useStoryEditorTabs } from './hooks/useStoryEditorTabs'
import { StoryEditorFormSubmit } from './components/story-editor-form-submit/StoryEditorFormSubmit'

export const StoryEditorTabs = () => {
    const { storyEditorTabs } = useStoryEditorTabs()

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
            items={storyEditorTabs}
            tabBarExtraContent={<StoryEditorFormSubmit />}
            // onChange={onChange}
            indicator={{ align: 'center' }}
        />
    )
}
