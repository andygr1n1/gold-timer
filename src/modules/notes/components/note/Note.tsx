import { observer } from 'mobx-react-lite'
import { INote$ } from '../../mst/types'
import { format } from 'date-fns'
import { NoteTagsList } from '../NoteTagsList'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState'
import { NoteContextMenu } from './NoteContextMenu'
import { useNotesStore } from '@/StoreProvider'
import ReactQuill from 'react-quill'

export const Note: React.FC<{ note: INote$ }> = observer(({ note }) => {
    const { openNoteViewMode } = useNotesStore()
    const { popoverState, setPopoverState } = useTogglePopoverState()

    return (
        <XDropdown
            open={popoverState}
            onOpenChange={() => {
                setPopoverState(!popoverState)
            }}
            trigger={['click', 'contextMenu']}
            dropdownRender={() => <NoteContextMenu onClose={() => setPopoverState(false)} note={note} />}
        >
            <div
                className={
                    'bg-global-2-bg flex w-[calc(100%-40px)] flex-col gap-5 overflow-auto rounded-lg p-5 md:h-[220px] md:w-fit md:min-w-[300px] md:flex-[20%]'
                }
                onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    openNoteViewMode(note.id)
                    setPopoverState(false)
                }}
                onContextMenu={() => {
                    setPopoverState(!popoverState)
                }}
                key={note.id}
            >
                {note.created_at && (
                    <div className='flex justify-between'>
                        <div className='text-xs'>{format(note.created_at, 'dd MMM, yyyy')}</div>
                    </div>
                )}
                <NoteTagsList note={note} />

                <ReactQuill
                    className='view-mode [&_.ql-editor]:!max-h-[130px] [&_.ql-editor]:!min-h-[130px]'
                    value={note.description}
                    modules={{ toolbar: [] }}
                    readOnly={true}
                />
            </div>
        </XDropdown>
    )
})
