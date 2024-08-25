import { IconNew } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useNoteEditor$ } from '../../../story-editor-dialog/stores/note-editor-store/useNoteEditor.store'
import { editorMode } from '../../../story-editor-dialog/stores/note-editor-store/types'

export const AddNote: React.FC = () => {
    const { setStore } = useNoteEditor$()

    const addNote = () => {
        setStore({ editorMode: editorMode.new, id: null, open: true })
    }

    return (
        <div className='opacity-70'>
            <StyledButton startIcon={<IconNew width={24} height={24} />} onClick={addNote} variant='text'>
                Add note
            </StyledButton>
        </div>
    )
}
