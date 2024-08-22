import { TabsProps } from 'antd'
import { CreateLabelFormik } from '../components/CreateLabelFormik'
import { NotesLabelsCRUD } from '../components/NotesLabelsCRUD'

export const useNotesLabelsTabs = () => {
    const notesLabelsTabs: TabsProps['items'] = [
        { key: '1', label: 'New Label', children: <CreateLabelFormik /> },
        { key: '2', label: 'Labels', children: <NotesLabelsCRUD /> },
    ]

    return { notesLabelsTabs }
}
