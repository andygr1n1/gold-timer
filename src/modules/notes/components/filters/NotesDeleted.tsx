import { useNotesStore } from '@/StoreProvider'
import { StyledButton } from '@/components/buttons/StyledButton'
import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

export const NotesDeleted: React.FC = observer(() => {
    const {
        notes_filter$: { show_deleted, onChangeField, deletedNotes },
    } = useNotesStore()

    useEffect(() => {
        if (!deletedNotes.length) {
            onChangeField('show_deleted', false)
        }
    }, [deletedNotes.length])

    return deletedNotes.length ? (
        <StyledButton
            onClick={() => {
                onChangeField('show_deleted', !show_deleted)
            }}
            variant='text'
            className={clsx(show_deleted && '!text-blue-600')}
        >
            Deleted
        </StyledButton>
    ) : null
})
