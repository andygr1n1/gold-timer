import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { IconEdit } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { INoteSchema } from '@/modules/notes/shared-services/types'
import { useNoteEditor$ } from '../../../story-editor-dialog/stores/note-editor-store/useNoteEditor.store'
import { editorMode } from '../../../story-editor-dialog/stores/note-editor-store/types'
import { NoteIsFavorite } from '@/modules/notes/shared-components/note-is-favorite/NoteIsFavorite'
import { NoteIsArchived } from '@/modules/notes/shared-components/note-is-archived/NoteIsArchived'
import { NoteIsDeleted } from '@/modules/notes/shared-components/note-is-deleted/NoteIsDeleted'

export const NoteContextMenu: React.FC<{ onClose: () => void; note: INoteSchema }> = ({ onClose, note }) => {
    const { setStore } = useNoteEditor$()

    return (
        <XMenuDropdown>
            <XMenuItem>
                <NoteIsFavorite
                    id={note.id}
                    isFavorite={!!note.is_favorite}
                    label={
                        <span className='flex w-[110px] justify-start capitalize'>
                            {note.is_favorite ? 'Unfavorite' : 'Favorite'}
                        </span>
                    }
                />
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    setStore({ editorMode: editorMode.edit, id: note.id, open: true })
                    onClose()
                }}
            >
                <StyledButton variant='text' size='small' startIcon={<IconEdit width={24} height={24} />}>
                    <span className='flex w-[110px] justify-start capitalize'>Edit</span>
                </StyledButton>
            </XMenuItem>
            <XMenuItem>
                <NoteIsArchived
                    id={note.id}
                    isArchived={!!note.archived}
                    label={
                        <span className='flex w-[110px] justify-start capitalize'>
                            {note.archived ? 'Unarchive' : 'Archive'}
                        </span>
                    }
                />
            </XMenuItem>
            <XMenuItem>
                <NoteIsDeleted
                    id={note.id}
                    deletedAt={!!note.deleted_at}
                    label={
                        <span className='flex w-[110px] justify-start capitalize'>
                            {note.deleted_at ? 'Restore' : 'Move to bin'}
                        </span>
                    }
                />
            </XMenuItem>
        </XMenuDropdown>
    )
}
