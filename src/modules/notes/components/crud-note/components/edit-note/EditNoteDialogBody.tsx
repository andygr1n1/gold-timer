import { observer } from 'mobx-react-lite'
import { NotesActionsMenu } from '../common-components/actions-menu/NotesActionsMenu'
import { useNotesStore } from '@/app/StoreProvider'
import { FormFooter } from '@/components/form/FormFooter'
import { NoteDescriptionInput } from '../common-components/NoteDescriptionInput'
import { NoteTagInput } from '../common-components/NoteTagInput'

export const EditNoteDialogBody: React.FC = observer(() => {
    const { edit_note } = useNotesStore()
    return edit_note ? (
        <>
            <div className='flex flex-col gap-10 pb-10'>
                <NotesActionsMenu note={edit_note} />
            </div>
            <div className='flex flex-col gap-4 py-2'>
                <NoteDescriptionInput note={edit_note} />
                <NoteTagInput note={edit_note} />
            </div>
            <Footer />
        </>
    ) : null
})

const Footer = observer(() => {
    const { updateNote, edit_note, onChangeField, openNoteViewMode } = useNotesStore()

    const onCancel = () => onChangeField('edit_note', undefined)
    if (!edit_note) return null

    const { descriptionLength, redirected } = edit_note

    return (
        <FormFooter
            onOk={updateNote}
            disabled={!descriptionLength}
            onCancel={() => {
                if (redirected) {
                    openNoteViewMode(edit_note.id)
                } else {
                    onCancel()
                }
            }}
        />
    )
})
