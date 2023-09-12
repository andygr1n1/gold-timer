import { useNotesStore } from '@/StoreProvider'
import { DialogConfirm } from '@/components/dialog-confirm/DialogConfirm'
import { observer } from 'mobx-react-lite'

export const NoteMenuDialogConfirm = observer(() => {
    const { deleteNote, selected_note, onChangeField } = useNotesStore()

    const onCancel = () => {
        selected_note?.onChangeField('dialog_action', undefined)
        onChangeField('selected_note', undefined)
    }

    return (
        <DialogConfirm
            title={'This note will be deleted, are you sure?'}
            onCancel={onCancel}
            onOk={deleteNote}
            open={!!selected_note?.deleteMode}
        />
    )
})
