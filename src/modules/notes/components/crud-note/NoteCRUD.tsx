import { useNotesStore } from '@/modules/app/mst/StoreProvider'
import { XModal } from '@/components-x/x-modal/XModal'
import { observer } from 'mobx-react-lite'
import { NewNoteDialogTitle } from './components/new-note/NewNoteDialogTitle'
import { EditNoteDialogTitle } from './components/edit-note/EditNoteDialogTitle'
import { ViewNoteDialogTitle } from './components/view-note/ViewNoteDialogTitle'
import { ViewNoteDialogBody } from './components/view-note/ViewNoteDialogBody'
import { NewNoteDialogBody } from './components/new-note/NewNoteDialogBody'
import { EditNoteDialogBody } from './components/edit-note/EditNoteDialogBody'

export const NoteCRUD: React.FC = observer(function CRUD_GoalDialog() {
    const { onChangeField, selected_note, new_note, edit_note } = useNotesStore()

    const isOpen = !!new_note || !!edit_note || !!selected_note

    const onCancel = () => {
        onChangeField('new_note', undefined)
        onChangeField('edit_note', undefined)
        onChangeField('selected_note', undefined)
    }

    return (
        <XModal
            fullHeight
            open={isOpen}
            onCancel={onCancel}
            title={
                <div tabIndex={0} className='flex items-center justify-center gap-5'>
                    {new_note && <NewNoteDialogTitle />}
                    {edit_note && <EditNoteDialogTitle />}
                    {selected_note && <ViewNoteDialogTitle />}
                </div>
            }
        >
            {new_note && <NewNoteDialogBody />}
            {edit_note && <EditNoteDialogBody />}
            {selected_note && <ViewNoteDialogBody />}
        </XModal>
    )
})
