import { TabsProps } from 'antd'
import { CreateLabelFormik } from '../components/CreateLabelFormik'
import { NotesLabelsEditor } from '../components/notes-labels-editor/NotesLabelsEditor'

export const useNotesLabelsTabs = () => {
    const notesLabelsTabs: TabsProps['items'] = [
        { key: '1', label: 'New Label', children: <CreateLabelFormik /> },
        { key: '2', label: 'Labels', children: <NotesLabelsEditor /> },
    ]

    return { notesLabelsTabs }
}
