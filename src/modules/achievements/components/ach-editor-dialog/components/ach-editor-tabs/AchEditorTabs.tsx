import { Tabs } from 'antd'
import { AchEditorFormSubmit } from './components/topbar-extra-content/note-editor-form-submit/AchEditorFormSubmit'
import { useAchEditorTabs } from './hooks/useAchEditorTabs'
import { useAchEditorDialog$ } from '../../mst/provider'

export const AchEditorTabs = () => {
    const { readonly } = useAchEditorDialog$()
    const { editorTabs } = useAchEditorTabs()

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
            items={editorTabs}
            tabBarExtraContent={!readonly && <AchEditorFormSubmit />}
            indicator={{ align: 'center' }}
        />
    )
}
