import { useNotesStore } from '@/StoreProvider'
import { XModal } from '@/components-x/x-modal/XModal'
import { observer } from 'mobx-react-lite'
import { Form } from 'antd'
import { FormFooter } from '@/components/form/FormFooter'
import { NoteDescriptionInput } from './NoteDescriptionInput'
import { NoteTagInput } from './NoteTagInput'

export const CreateEditNoteDialog: React.FC = observer(() => {
    const { selected_note, cancelNoteCreateEditMode, saveNote } = useNotesStore()

    return (
        <XModal title={'Note Creator'} open={!!selected_note?.creatorMode} onCancel={cancelNoteCreateEditMode}>
            <Form className='py-5'>
                <NoteDescriptionInput />
                <NoteTagInput />
                {/* Footer */}
                <FormFooter
                    okTitle={'Save note'}
                    onOk={saveNote}
                    onCancel={cancelNoteCreateEditMode}
                    disabled={!selected_note?.description}
                />
            </Form>
        </XModal>
    )
})
