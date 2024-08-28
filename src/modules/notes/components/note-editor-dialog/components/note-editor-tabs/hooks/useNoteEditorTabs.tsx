import { type TabsProps } from 'antd'
import { NoteInfo } from '../components/note-info/NoteInfo'
// import { NoteAttachments } from '../components/note-attachments/NoteAttachments'

export const useNoteEditorTabs = () => {
    const noteEditorTabs: TabsProps['items'] = [
        { key: '1', label: 'Note', children: <NoteInfo /> },
        // { key: '2', label: 'Attachments', children: <NoteAttachments />, disabled: true },
    ]

    return { noteEditorTabs }
}
