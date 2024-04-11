import { observer } from 'mobx-react-lite'
import { useNotesStore } from '@/app/StoreProvider'
import { FormFooter } from '@/components/form/FormFooter'
import { NoteDescriptionInput } from '../common-components/NoteDescriptionInput'
import { NoteTagInput } from '../common-components/NoteTagInput'

export const NewNoteDialogBody: React.FC = observer(() => {
    const { new_note } = useNotesStore()

    return new_note ? (
        <>
            <div className='flex flex-col flex-auto gap-4 py-2'>
                <NoteDescriptionInput note={new_note} />
                <NoteTagInput note={new_note} />
            </div>
            <Footer />
        </>
    ) : null
})

const Footer = observer(() => {
    const { createNewNote, new_note, onChangeField } = useNotesStore()
    const onCancel = () => {
        onChangeField('new_note', undefined)
    }

    return (
        <FormFooter
            onOk={createNewNote}
            disabled={!new_note?.descriptionLength}
            disabledTooltip={'Description required'}
            onCancel={onCancel}
        />
    )
})
