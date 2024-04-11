import { observer } from 'mobx-react-lite'

import { useNotesStore } from '@/app/StoreProvider'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'
import { NotesViewStatus } from '../../helpers/enums'
import { useState } from 'react'
import clsx from 'clsx'
import { IconBackInTime, IconFolder } from '@/assets/icons'
import { cn } from '@/functions'

export const NotesStatusSelect: React.FC = observer(() => {
    const [open, setOpen] = useState(false)
    const {
        notes_filter$: {
            onChangeField,
            isShowActiveMode,
            archivedNotes,
            deletedNotes,
            isShowDeletedMode,
            isShowArchivedMode,
        },
    } = useNotesStore()

    const onClose = (selected: NotesViewStatus) => {
        setOpen(false)
        onChangeField('notes_view_mode', selected)
    }

    if (!archivedNotes.length && !deletedNotes.length && isShowActiveMode) return null

    return (
        <XDropdown
            onOpenChange={(x) => {
                setOpen(x)
            }}
            trigger={['hover']}
            open={open}
            dropdownRender={() => <DropdownRender onClose={onClose} isShowActiveMode={isShowActiveMode} />}
            placement='bottomRight'
            overlayClassName='!z-[55]'
        >
            <div>
                <StyledButton
                    className={cn(isShowArchivedMode && '!bg-amber-600', isShowActiveMode && '!bg-teal-600')}
                    error={isShowDeletedMode}
                    startIcon={<IconBackInTime width={24} height={24} />}
                />
            </div>
        </XDropdown>
    )
})

const DropdownRender: React.FC<{ isShowActiveMode: boolean; onClose: (selected: NotesViewStatus) => void }> = observer(
    ({ onClose, isShowActiveMode }) => {
        const {
            notes_filter$: { isShowDeletedMode, isShowArchivedMode, archivedNotes, deletedNotes },
        } = useNotesStore()

        return (
            <XMenuDropdown>
                {!!archivedNotes.length && (
                    <XMenuItem
                        className={clsx('!opacity-100 hover:text-blue-500', isShowArchivedMode && 'text-blue-500')}
                        onClick={() => {
                            onClose(NotesViewStatus.ARCHIVED)
                        }}
                    >
                        <IconFolder width={24} height={24} className={clsx('duration-300 group-hover:text-blue-500')} />
                        <span className='text-inherit'>Show archived</span>
                    </XMenuItem>
                )}
                {!!deletedNotes.length && (
                    <XMenuItem
                        className={clsx('!opacity-100 hover:text-blue-500', isShowDeletedMode && 'text-blue-500')}
                        onClick={() => {
                            onClose(NotesViewStatus.DELETED)
                        }}
                    >
                        <IconFolder width={24} height={24} className={clsx('duration-300 group-hover:text-blue-500')} />
                        <span>Show deleted</span>
                    </XMenuItem>
                )}
                {!isShowActiveMode && (
                    <XMenuItem
                        className='!opacity-100 hover:text-blue-500'
                        onClick={() => {
                            onClose(NotesViewStatus.ALL)
                        }}
                    >
                        <IconFolder width={24} height={24} className={clsx('duration-300 group-hover:text-blue-500')} />
                        <span>Show active</span>
                    </XMenuItem>
                )}
            </XMenuDropdown>
        )
    },
)
