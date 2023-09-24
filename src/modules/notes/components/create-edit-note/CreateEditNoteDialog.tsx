import { useNotesStore } from '@/StoreProvider'
import { XModal } from '@/components-x/x-modal/XModal'
import { observer } from 'mobx-react-lite'
import { Form } from 'antd'
import { FormFooter } from '@/components/form/FormFooter'
import { NoteDescriptionInput } from './NoteDescriptionInput'
import { NoteTagInput } from './NoteTagInput'

export const CreateEditNoteDialog: React.FC = observer(() => {
    const { create_edit_note$, cancelNoteCreateEditMode, saveNote } = useNotesStore()
    const { isOpen, saveEnabled } = create_edit_note$
    return (
        <XModal title={'Note Creator'} open={isOpen} onCancel={() => cancelNoteCreateEditMode()}>
            <Form className='w-[300px] py-5 md:w-[416px]'>
                <NoteDescriptionInput />
                <NoteTagInput />
                {/* Footer */}
                <FormFooter
                    okTitle={'Save'}
                    onOk={saveNote}
                    onCancel={() => cancelNoteCreateEditMode()}
                    disabled={!saveEnabled}
                />
            </Form>
        </XModal>
    )
})
