import { useNotesStore } from '@/StoreProvider'
import { XModal } from '@/components-x/x-modal/XModal'
import { observer } from 'mobx-react-lite'
import { FormFooter } from '@/components/form/FormFooter'
import { NoteDescriptionInput } from './components/NoteDescriptionInput'
import { NoteTagInput } from './components/NoteTagInput'

export const CRUD_NoteDialog: React.FC = observer(() => {
    const { create_edit_note$, cancelNoteCreateEditMode, saveNote } = useNotesStore()
    const { isOpen, saveEnabled } = create_edit_note$
    return (
        <XModal title={'Note Creator'} open={isOpen} onCancel={() => cancelNoteCreateEditMode()}>
            <NoteDescriptionInput />
            <NoteTagInput />
            {/* Footer */}
            <FormFooter
                okTitle={'Save'}
                onOk={saveNote}
                onCancel={() => cancelNoteCreateEditMode()}
                disabled={!saveEnabled}
            />
        </XModal>
    )
})
