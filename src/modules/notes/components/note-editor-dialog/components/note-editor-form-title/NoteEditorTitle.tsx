import { IconEdit, IconEye, IconNew } from '@/assets/icons'
import { useNoteEditor$ } from '../../stores/note-editor-store/useNoteEditor.store'

const NoteEditorTitle = () => {
    const { newMode, editMode } = useNoteEditor$()
    let stateText: React.ReactNode = (
        <>
            <IconEye className='flex items-center justify-center' width={24} height={24} />
            View Note
        </>
    )
    if (newMode)
        stateText = (
            <>
                <IconNew width={28} height={28} />
                New Note
            </>
        )
    if (editMode)
        stateText = (
            <>
                <IconEdit width={24} height={24} />
                Edit Note
            </>
        )

    return (
        <span className='flex items-center justify-center gap-5 focus-visible:outline-none min-w-[200px]' tabIndex={0}>
            {stateText}
        </span>
    )
}

export default NoteEditorTitle
