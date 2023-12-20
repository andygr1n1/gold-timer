import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { observer } from 'mobx-react-lite'
import { INote$ } from '../../mst/types'
import { useNotesStore } from '@/StoreProvider'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { Icon } from '@iconify/react'
import clsx from 'clsx'

export const NoteContextMenu: React.FC<{ onClose: () => void; note: INote$ }> = observer(({ onClose, note }) => {
    const { openNoteEditMode, openNoteViewMode } = useNotesStore()

    return (
        <XMenuDropdown>
            <XMenuItem
                className={clsx('group hover:text-blue-500')}
                onClick={() => {
                    openNoteViewMode(note.id)
                    onClose()
                }}
            >
                <Icon
                    icon='akar-icons:eye-open'
                    width={24}
                    height={24}
                    className={clsx('duration-300 group-hover:text-blue-500')}
                />
                <span className='text-inherit'>Open</span>
            </XMenuItem>
            <XMenuItem
                className={clsx('group hover:text-blue-500')}
                onClick={() => {
                    openNoteEditMode(note.id)
                    onClose()
                }}
            >
                <Icon
                    icon='material-symbols:edit-square'
                    width={24}
                    height={24}
                    className={clsx('duration-300 group-hover:text-blue-500')}
                />
                <span className='text-inherit'>Edit</span>
            </XMenuItem>
            <XMenuItem
                className={clsx('group hover:text-blue-500')}
                onClick={() => {
                    note.archiveNote()
                    onClose()
                }}
            >
                <Icon
                    icon='entypo:archive'
                    width={24}
                    height={24}
                    className={clsx('duration-300 group-hover:text-blue-500')}
                />
                <span className='text-inherit'>{note.archived ? 'Unarchive' : 'Archive'}</span>
            </XMenuItem>
            <XMenuItem
                className={clsx('group hover:text-red-500')}
                onClick={() => {
                    note.deleteNote()
                    onClose()
                }}
            >
                <Icon
                    icon='fluent:delete-dismiss-24-filled'
                    width={24}
                    height={24}
                    className={clsx('duration-300 group-hover:text-red-500')}
                />
                <span className='text-inherit'>{note.deleted_at ? 'Restore from bin' : 'Move to bin'}</span>
            </XMenuItem>
        </XMenuDropdown>
    )
})
