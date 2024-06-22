import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { observer } from 'mobx-react-lite'
import { INote$ } from '../../mst/types'
import { useNotesStore } from '@/modules/app/mst/StoreProvider'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { IconDeleteTemp, IconEdit, IconEye } from '@/assets/icons'
import { IconArchive } from '@/assets/icons/IconArchive'
import { StyledButton } from '@/components/buttons/StyledButton'

export const NoteContextMenu: React.FC<{ onClose: () => void; note: INote$ }> = observer(({ onClose, note }) => {
    const { openNoteEditMode, openNoteViewMode } = useNotesStore()

    return (
        <XMenuDropdown>
            <XMenuItem
                onClick={() => {
                    openNoteViewMode(note.id)
                    onClose()
                }}
            >
                <StyledButton variant='text' size='small' startIcon={<IconEye width={24} height={24} />}>
                    <span className='flex w-[110px] justify-start capitalize'>open</span>
                </StyledButton>
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    openNoteEditMode(note.id)
                    onClose()
                }}
            >
                <StyledButton variant='text' size='small' startIcon={<IconEdit width={24} height={24} />}>
                    <span className='flex w-[110px] justify-start capitalize'>Edit</span>
                </StyledButton>
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    note.archiveNote()
                    onClose()
                }}
            >
                <StyledButton variant='text' size='small' startIcon={<IconArchive width={24} height={24} />}>
                    <span className='flex w-[110px] justify-start capitalize'>
                        {' '}
                        {note.archived ? 'Unarchive' : 'Archive'}
                    </span>
                </StyledButton>
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    note.deleteNote()
                    onClose()
                }}
            >
                <StyledButton variant='text' size='small' startIcon={<IconDeleteTemp width={24} height={24} />}>
                    <span className='flex w-[110px] justify-start capitalize'>
                        {note.deleted_at ? 'Restore' : 'Move to bin'}
                    </span>
                </StyledButton>
            </XMenuItem>
        </XMenuDropdown>
    )
})
