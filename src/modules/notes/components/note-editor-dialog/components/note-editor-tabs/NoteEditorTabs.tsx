import { Tabs } from 'antd'
import { NoteEditorFormSubmit } from './components/topbar-extra-content/note-editor-form-submit/NoteEditorFormSubmit'
import { useNoteEditorTabs } from './hooks/useNoteEditorTabs'

export const NoteEditorTabs = () => {
    const { noteEditorTabs } = useNoteEditorTabs()

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
            items={noteEditorTabs}
            tabBarExtraContent={<NoteEditorFormSubmit />}
            // onChange={onChange}
            indicator={{ align: 'center' }}
        />
    )
}
