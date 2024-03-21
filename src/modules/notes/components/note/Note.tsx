import { observer } from 'mobx-react-lite'
import { INote$ } from '../../mst/types'
import { format } from 'date-fns'
import { NoteTagsList } from '../NoteTagsList'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState.hook'
import { NoteContextMenu } from './NoteContextMenu'
import ReactQuill from 'react-quill'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IconArchive } from '@/assets/icons/IconArchive'
import { IconDeleteTemp } from '@/assets/icons'

export const Note: React.FC<{ note: INote$ }> = observer(({ note }) => {
    const { popoverState, setPopoverState } = useTogglePopoverState()

    return (
        <XDropdown
            open={popoverState}
            onOpenChange={() => {
                setPopoverState(!popoverState)
            }}
            trigger={['contextMenu']}
            dropdownRender={() => <NoteContextMenu onClose={() => setPopoverState(false)} note={note} />}
        >
            <div
                className={
                    'bg-global-2-bg flex w-[calc(100%-40px)] max-w-[600px] flex-col gap-5 overflow-auto rounded-lg p-5 '
                }
                onContextMenu={() => {
                    setPopoverState(!popoverState)
                }}
                key={note.id}
            >
                {note.created_at && (
                    <div className='flex justify-between items-center'>
                        <div className='text-sm font-semibold underline'>{format(note.created_at, 'dd MMM, yyyy')}</div>
                        <div className='flex gap items-center'>
                            {note.archived && (
                                <StyledButton
                                    className='!pointer-events-none'
                                    size='small'
                                    variant='text'
                                    startIcon={<IconArchive width={24} height={24} className='text-amber-500' />}
                                />
                            )}
                            {note.deleted_at && (
                                <StyledButton
                                    className='!pointer-events-none'
                                    size='small'
                                    variant='text'
                                    startIcon={<IconDeleteTemp width={24} height={24} className='text-rose-700 ' />}
                                />
                            )}
                        </div>
                    </div>
                )}
                <NoteTagsList note={note} />

                <ReactQuill className='view-mode ' value={note.description} modules={{ toolbar: [] }} readOnly={true} />
            </div>
        </XDropdown>
    )
})
