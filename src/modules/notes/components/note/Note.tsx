import { observer } from 'mobx-react-lite'
import { INote$ } from '../../mst/types'
import { format } from 'date-fns'
import { Interweave } from 'interweave'
import { NoteTagsList } from '../NoteTagsList'
import styles from './Note.module.scss'
import clsx from 'clsx'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState'
import { NoteContextMenu } from './NoteContextMenu'
import { useNotesStore } from '@/StoreProvider'

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
                className={styles['note-container']}
                onClick={() => {
                    setPopoverState(!popoverState)
                }}
                onContextMenu={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    openNoteViewMode(note.id)
                    setPopoverState(false)
                }}
                key={note.id}
            >
                {note.created_at && (
                    <div className='flex justify-between'>
                        <div className='text-xs'>{format(note.created_at, 'dd MMM, yyyy')}</div>
                    </div>
                )}
                <NoteTagsList note={note} />
                <div className='overflow-wrap-anywhere flex  h-full flex-auto cursor-pointer  '>
                    <Interweave
                        className={clsx('overflow-wrap-anywhere', styles['interweave'])}
                        allowAttributes
                        disableMatchers
                        disableFilters
                        allowElements
                        content={note.description}
                    />
                </div>
            </div>
        </XDropdown>
    )
})
